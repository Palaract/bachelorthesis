import numpy as np

def compute_segment_slope_intercept(S_segment: np.ndarray, y_segment: np.ndarray) -> tuple:
    """
    Compute the slope and intercept of a linear segment given the segment's data points.
    
    Args:
        S_segment (np.ndarray): The independent variable data points of the segment.
        y_segment (np.ndarray): The dependent variable data points of the segment.
    
    Returns:
        tuple: A tuple containing the slope and intercept of the linear segment.
    """
    m, c = np.polyfit(S_segment, y_segment, 1)
    return m, c

def compute_linear_segments(S: np.ndarray, y: np.ndarray, num_segments: int) -> list:
    """
    Compute the linear segments (slope and intercept) for a given number of segments.

    Args:
        S (np.ndarray): The independent variable data points.
        y (np.ndarray): The dependent variable data points.
        num_segments (int): The number of linear segments to compute.

    Returns:
        list: A list of tuples where each tuple contains the slope and intercept for a segment.
    """
    segments = []
    segment_size = len(S) // num_segments
    for i in range(num_segments):
        start = i * segment_size
        end = (start + segment_size) if i < num_segments - 1 else len(S)
        m, c = compute_segment_slope_intercept(S[start:end], y[start:end])
        segments.append((m, c))
    
    return segments

def approximate_y_values(S: np.ndarray, segments: list) -> np.ndarray:
    """
    Approximate y values using computed linear segments.

    Args:
        S (np.ndarray): The independent variable data points.
        segments (list): The list of tuples containing slope and intercept of each segment.

    Returns:
        np.ndarray: The approximated y values.
    """
    y_approx = np.zeros_like(S)
    segment_size = len(S) // len(segments) + (len(S) % len(segments) > 0)
    for i, (m, c) in enumerate(segments):
        start = i * segment_size
        end = (start + segment_size) if i < len(segments) - 1 else len(S)
        y_approx[start:end] = m * S[start:end] + c
    return y_approx

def linear_approximation_segments(S: np.ndarray, y: np.ndarray, num_segments: int = 50) -> list:
    """
    Perform the linear segments approximation and return the approximate y values as a list of floats.
    
    Args:
        S (np.ndarray): The independent variable data points.
        y (np.ndarray): The dependent variable data points.
        num_segments (int, optional): The number of linear segments to use for the approximation. Default is 1.

    Returns:
        list: The approximated y values as a list of floats.
    """
    # Revert to original implementations for other functions if needed
    
    # Original implementation of computing linear segments
    segments = compute_linear_segments(S, y, num_segments)
    
    # Original approximation of y values based on computed segments
    y_approx = approximate_y_values(S, segments)
    
    # Convert the approximated y values from a NumPy array to a list of floats
    return y_approx.tolist(), num_segments
