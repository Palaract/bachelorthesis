import numpy as np
import warnings

def suppress_numpy_warnings(suppress: bool):
    """
    Suppress or unsuppress NumPy RankWarnings based on the suppress flag.

    Args:
        suppress (bool): If True, suppress NumPy RankWarnings. Otherwise, unsuppress them.
    """
    action = 'ignore' if suppress else 'default'
    warnings.simplefilter(action, np.RankWarning)

def compute_segment_approximation(S: np.ndarray, y_base: np.ndarray, segments: list) -> tuple:
    """
    Compute the linear approximation for given segments and return the approximation details.

    Args:
        S (np.ndarray): The independent variable data points.
        y_base (np.ndarray): The dependent variable data points corresponding to S.
        segments (list): List of tuples representing the start and end of each segment.

    Returns:
        tuple: A tuple containing the approximation error, piecewise function details, and the segments used.
    """
    piecewise_func = []
    approx_values = np.zeros_like(S)
    for (start, end) in segments:
        seg_indices = np.where((S >= start) & (S <= end))[0]
        slope, intercept = np.polyfit(S[seg_indices], y_base[seg_indices], 1)
        piecewise_func.append((slope, intercept))
        approx_values[seg_indices] = slope * S[seg_indices] + intercept

    error = np.trapz(np.abs(y_base - approx_values), S) / (S[-1] - S[0])
    return error, piecewise_func, segments

def compute_error_for_n_segments(S: np.ndarray, y_base: np.ndarray, n_segments: int) -> tuple:
    """
    Compute the approximation error for a given number of segments.

    Args:
        S (np.ndarray): The independent variable data points.
        y_base (np.ndarray): The dependent variable data points corresponding to S.
        n_segments (int): The number of segments to use for approximation.

    Returns:
        tuple: A tuple containing the approximation error, piecewise function details, and the segments used.
    """
    points = np.linspace(S[0], S[-1], n_segments)
    segments = [(points[i], points[i+1]) for i in range(len(points)-1)]
    return compute_segment_approximation(S, y_base, segments)

def find_optimal_segmentation(S: np.ndarray, y_base: np.ndarray, max_segments: int, threshold: float) -> tuple:
    """
    Find the optimal number of segments for the approximation within given constraints.

    Args:
        S (np.ndarray): The independent variable data points.
        y_base (np.ndarray): The dependent variable data points corresponding to S.
        max_segments (int): The maximum number of segments allowed.
        threshold (float): The error threshold for the approximation.

    Returns:
        tuple: A tuple containing the optimal number of segments, the piecewise function details, and the segments used.
    """
    n_segments = 2
    error, piecewise_func, segments = compute_error_for_n_segments(S, y_base, n_segments)
    while error > threshold and n_segments <= max_segments:
        n_segments *= 2
        error, piecewise_func, segments = compute_error_for_n_segments(S, y_base, n_segments)

    low = n_segments // 2
    high = min(n_segments, max_segments)
    while low < high:
        mid = (low + high) // 2
        error, piecewise_func, segments = compute_error_for_n_segments(S, y_base, mid)
        if error > threshold:
            low = mid + 1
        else:
            high = mid

    error, piecewise_func, segments = compute_error_for_n_segments(S, y_base, low)
    return low, piecewise_func, segments

def adaptive_piecewise_linear_approximation(S: np.ndarray, y_base: np.ndarray, max_segments: int = 50, threshold: float = 0.01, suppress_warnings: bool = False) -> list:
    """
    Perform an adaptive piecewise linear approximation of a given dataset and return the approximation
    as a list of floats for a specific query set of S values.

    Args:
        S (np.ndarray): The independent variable data points.
        y_base (np.ndarray): The dependent variable data points corresponding to S.
        max_segments (int): The maximum number of linear segments to use for the approximation.
        threshold (float): The error threshold for the approximation.
        suppress_warnings (bool): If True, suppress NumPy RankWarnings.

    Returns:
        list: The approximated y values as a list of floats.
    """
    suppress_numpy_warnings(suppress_warnings)
    n_segments, piecewise_func, segments = find_optimal_segmentation(S, y_base, max_segments, threshold)
    
    def approx_function(S_query: np.ndarray) -> np.ndarray:
        y_approx = np.zeros_like(S_query)
        for (slope, intercept), (start, end) in zip(piecewise_func, segments):
            seg_indices = np.where((S_query >= start) & (S_query <= end))[0]
            y_approx[seg_indices] = slope * S_query[seg_indices] + intercept
        return y_approx

    suppress_numpy_warnings(False)
    
    # Execute the approximation function over the full range of S to get the approximated y values
    y_approx_full = approx_function(S)
    
    # Convert the approximated y values from a NumPy array to a list of floats
    return y_approx_full.tolist(), n_segments

