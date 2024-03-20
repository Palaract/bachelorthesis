import numpy as np
import pwlf
from bayes_opt import BayesianOptimization

def compute_area_between_curves(y1, y2, x):
    """
    Compute the normalized area between two curves using the trapezoidal rule.
    """
    area = np.trapz(np.abs(y1 - y2), x)
    normalization_factor = x[-1] - x[0]
    return area / normalization_factor

def objective_function(num_segments, x, y):
    """
    Objective function for Bayesian optimization.
    """
    pwlf_model = pwlf.PiecewiseLinFit(x, y)
    breakpoints = pwlf_model.fitfast(int(num_segments))
    y_approx = pwlf_model.predict(x)
    area = compute_area_between_curves(y, y_approx, x)
    return -area  # Negative because BayesianOptimization maximizes the function

def perform_bayesian_optimization(x, y, max_segments=20, init_points=5, n_iter=25):
    """
    Perform Bayesian optimization to find the optimal number of segments.
    """
    optimizer = BayesianOptimization(
        f=lambda num_segments: objective_function(num_segments, x, y),
        pbounds={'num_segments': (2, max_segments)},
        random_state=1,
        verbose=2
    )
    optimizer.maximize(init_points=init_points, n_iter=n_iter)
    optimal_segments = int(optimizer.max['params']['num_segments'])
    return optimal_segments

def bayesian_optimization_pwlf(x, y, max_segments=50, init_points=5, n_iter=25) -> list:
    """
    Fit a piecewise linear model using Bayesian optimization and return the approximated y values as a list of floats.

    Args:
        x (np.ndarray): The independent variable data points.
        y (np.ndarray): The dependent variable data points.
        max_segments (int): The maximum number of linear segments for the approximation.
        init_points (int): The number of initialization points for Bayesian optimization.
        n_iter (int): The number of iterations for Bayesian optimization.

    Returns:
        list: The approximated y values as a list of floats.
    """
    optimal_segments = perform_bayesian_optimization(x, y, max_segments, init_points, n_iter)
    pwlf_model = pwlf.PiecewiseLinFit(x, y)
    pwlf_model.fitfast(optimal_segments)
    
    # Generate approximated y values using the fitted model over the original x range
    y_approx = pwlf_model.predict(x)
    
    # Convert the approximated y values to a list of floats
    return y_approx.tolist(), optimal_segments
