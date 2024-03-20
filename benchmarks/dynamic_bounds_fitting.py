import numpy as np
import pwlf

def compute_area_between_curves(y1, y2, x):
    """
    Compute the normalized area between two curves using the trapezoidal rule.
    """
    area = np.trapz(np.abs(y1 - y2), x)
    normalization_factor = x[-1] - x[0]
    return area / normalization_factor

def find_optimal_number_of_segments(x, y, max_segments=20, threshold=0.01):
    """
    Determine the optimal number of segments for piecewise linear fitting.
    """
    for num_segments in range(2, max_segments + 1):
        my_pwlf = pwlf.PiecewiseLinFit(x, y)
        res = my_pwlf.fit(num_segments)
        y_fit = my_pwlf.predict(x)
        area = compute_area_between_curves(y, y_fit, x)
        if area < threshold:
            return num_segments
    return max_segments

def fit_piecewise_linear(x, y, max_segments=50, threshold=0.01) -> list:
    """
    Fit a piecewise linear function to the data and return the approximated y values as a list of floats.

    Args:
        x (np.ndarray): The independent variable data points.
        y (np.ndarray): The dependent variable data points.
        max_segments (int): The maximum number of linear segments for the approximation.
        threshold (float): The threshold for determining the optimal number of segments.

    Returns:
        list: The approximated y values as a list of floats.
    """
    optimal_segments = find_optimal_number_of_segments(x, y, max_segments, threshold)
    my_pwlf = pwlf.PiecewiseLinFit(x, y)
    my_pwlf.fit(optimal_segments)
    
    # Generate approximated y values using the fitted model over the original x range
    y_approx = my_pwlf.predict(x)
    
    # Convert the approximated y values to a list of floats
    return y_approx.tolist(), optimal_segments