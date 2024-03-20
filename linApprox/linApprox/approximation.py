import numpy as np
import warnings
from typing import Callable, Any
import gurobipy as gp
from cobra import Model
from .functions import FUNCTION_MAP

class LinearApproximator:
    """
    A class for creating a linear piecewise approximation of a function within a given domain.

    Attributes:
        start (float): The start of the domain on the x-axis.
        end (float): The end of the domain on the x-axis.
        num_points (int): The number of points in the domain.
        function (callable): The function to approximate.
        function_params (dict): Parameters of the function to approximate
        max_segments (int): The maximum number of line segments for the piecewise approximation.
        threshold (float): The error threshold for the approximation.
        suppress_warnings (bool): If True, suppresses NumPy polynomial fit warnings.
        piecewise_func (list): Stores the slope and intercept of each line segment.
        segments (list): List of tuples representing the start and end points of each segment.
    """
    def __init__(self, start : float, end : float, num_points : int, function : Callable, function_params : dict[str, Any] = {}, max_segments : int = 500, threshold : float = 0.01, suppress_warnings : bool = True):
        """
        Initializes the LinearApproximator with domain, function, and approximation parameters.

        Args:
            start (float): The start of the domain on the x-axis.
            end (float): The end of the domain on the x-axis.
            num_points (int): The number of points to be used for generating the domain within the specified range.
            function (FunctionType or callable): The function to approximate. Can be a predefined function specified by 
                the FunctionType enum from functions.py or a custom callable function. If a FunctionType enum value is
                provided, the corresponding predefined function is used. If a callable is provided, it is used directly.
            function_params (dict, optional): Parameters to be passed to the function. This should be a dictionary where 
                keys are the names of the parameters and values are their corresponding values. This is especially useful 
                for predefined functions that require specific parameters. Defaults to an empty dictionary.
            max_segments (int, optional): The maximum number of line segments for the piecewise approximation. Defaults to 500.
            threshold (float, optional): The error threshold for the approximation. Defaults to 0.01.
            suppress_warnings (bool, optional): If True, suppresses NumPy polynomial fit warnings. Defaults to True.

        The initializer first maps the provided function argument to the corresponding function, either from a set of predefined 
        functions or a user-defined function. It then generates a domain of x-values (S) using np.linspace and computes the 
        corresponding y-values (y_base) using the provided function and parameters.
        """
        self.start = start
        self.end = end
        self.num_points = num_points
        self.function = FUNCTION_MAP.get(function, function)
        self.function_params = function_params
        self.max_segments = max_segments
        self.threshold = threshold
        self.suppress_warnings = suppress_warnings
        self.S = np.linspace(start, end, num_points)
        self.y_base = self.function(self.S, **self.function_params)


    def update_piecewise_approximation(self, n_segments):
        """
        Updates the piecewise linear approximation with a given number of segments.

        Args:
            n_segments (int): Number of segments to use in the piecewise approximation.

        Returns:
            np.ndarray: Array of y-values approximated by the piecewise linear function.
        
        Note:
            This function makes `piecewise_func` and `segments` available in the approximator
        """
        points = np.linspace(self.S[0], self.S[-1], n_segments)
        segments = [(points[i], points[i+1]) for i in range(len(points)-1)]
        piecewise_func = []
        approx_values = np.zeros_like(self.S)

        for idx, (start, end) in enumerate(segments):
            seg_indices = np.where((self.S >= start) & (self.S <= end))[0]
            slope, intercept = np.polyfit(self.S[seg_indices], self.y_base[seg_indices], 1)
            piecewise_func.append((slope, intercept))
            approx_values[seg_indices] = slope * self.S[seg_indices] + intercept

        self.piecewise_func = piecewise_func
        self.segments = segments
        return approx_values

    def compute_error(self, approx_values):
        """
        Computes the error of the piecewise linear approximation.

        Args:
            approx_values (np.ndarray): The approximated y-values of the piecewise linear function.

        Returns:
            float: The calculated error of the approximation.
        """
        error = np.trapz(np.abs(self.y_base - approx_values), self.S) / (self.S[-1] - self.S[0])
        return error

    def compute_approximation(self):
        """
        Computes the linear piecewise approximation within the specified error threshold and segment limit.

        Args:
            None
        
        Returns:
            None

        Example:
            ```python
            approximator = LinearApproximator(S, y_base, max_segments, threshold)
            approximator.compute_approximation()
            ```
            This will compute the approximation and update the class attributes accordingly.

        Note:
            This method iteratively increases the number of segments until the error threshold is met
            or the maximum number of segments is reached. It uses a binary search approach to find
            the optimal number of segments within these constraints.
        """
        if self.suppress_warnings:
            warnings.simplefilter('ignore', np.RankWarning)

        n_segments = 2
        approx_values = self.update_piecewise_approximation(n_segments)
        error = self.compute_error(approx_values)

        while error > self.threshold and n_segments <= self.max_segments:
            n_segments *= 2
            approx_values = self.update_piecewise_approximation(n_segments)
            error = self.compute_error(approx_values)

        low = n_segments // 2
        high = min(n_segments, self.max_segments)
        while low < high:
            mid = (low + high) // 2
            approx_values = self.update_piecewise_approximation(mid)
            error = self.compute_error(approx_values)
            if error > self.threshold:
                low = mid + 1
            else:
                high = mid

        self.update_piecewise_approximation(low)
        
        if self.suppress_warnings:
            warnings.simplefilter('default', np.RankWarning)

    def get_approximated_function(self) -> list[tuple[float, float, float, float]]:
        """
        Generates a set of constraints for each segment of the piecewise linear approximation.

        Args:
            None

        Returns:
            list of tuples: Each tuple contains the definition of one segment or rather linear function. 
                The returned tuples are built like `(start, end, slope, intercept)`.
        """
        if not hasattr(self,"piecewise_func") or not hasattr(self,"segments"):
            self.compute_approximation()

        self.approximated_function = [ (start, end, slope, intercept) for ((start, end), (slope, intercept)) in zip(self.segments, self.piecewise_func) ]
        return self.approximated_function

    def apply_pwl_to_model(self, model: Model, xvar: gp.Var, yvar: gp.Var) -> tuple[Model, gp.Constr]:
        """
        Applies the piecewise linear approximation to a Gurobi optimization model using the addGenConstrPWL method.

        Args:
            model (gp.Model): The Gurobi model to which a piecewise linear constraint  will be added.
            xvar (gp.Var): The Gurobi model variable that represents the x-axis in the piecewise linear approximation.
            yvar (gp.Var): The Gurobi model variable that represents the y-axis in the piecewise linear approximation.
        
        Returns:
            model (gp.Model): The Gurobi model but with added piecewise linear constraint.
        """
        gurobi_model = model.solver.problem
        if self.piecewise_func is None or self.segments is None:
            self.compute_approximation()

        xpts = [self.segments[0][0]] + [seg[1] for seg in self.segments]

        ypts = []
        for i, xpoint in enumerate(xpts):
            if i == 0:
                ypts.append(self.piecewise_func[0][0] * xpoint + self.piecewise_func[0][1])
            else:
                ypts.append(self.piecewise_func[i-1][0] * xpoint + self.piecewise_func[i-1][1])

        constraint = gurobi_model.addGenConstrPWL(xvar, yvar, xpts, ypts, name="PWLConstraint")
        gurobi_model.update()
        return model, constraint





