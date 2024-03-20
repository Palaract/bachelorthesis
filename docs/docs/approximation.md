---
sidebar_label: LinApprox API
title: approximation
---

## LinearApproximator Objects

```python
class LinearApproximator()
```

A class for creating a linear piecewise approximation of a function within a given domain.

**Attributes**:

- `start` _float_ - The start of the domain on the x-axis.
- `end` _float_ - The end of the domain on the x-axis.
- `num_points` _int_ - The number of points in the domain.
- `function` _callable_ - The function to approximate.
- `function_params` _dict_ - Parameters of the function to approximate
- `max_segments` _int_ - The maximum number of line segments for the piecewise approximation.
- `threshold` _float_ - The error threshold for the approximation.
- `suppress_warnings` _bool_ - If True, suppresses NumPy polynomial fit warnings.
- `piecewise_func` _list_ - Stores the slope and intercept of each line segment.
- `segments` _list_ - List of tuples representing the start and end points of each segment.

#### \_\_init\_\_

```python
def __init__(start: float,
             end: float,
             num_points: int,
             function: Callable,
             function_params: dict[str, Any] = {},
             max_segments: int = 500,
             threshold: float = 0.01,
             suppress_warnings: bool = True)
```

Initializes the LinearApproximator with domain, function, and approximation parameters.

**Arguments**:

- `start` _float_ - The start of the domain on the x-axis.
- `end` _float_ - The end of the domain on the x-axis.
- `num_points` _int_ - The number of points to be used for generating the domain within the specified range.
- `function` _FunctionType or callable_ - The function to approximate. Can be a predefined function specified by
  the FunctionType enum from functions.py or a custom callable function. If a FunctionType enum value is
  provided, the corresponding predefined function is used. If a callable is provided, it is used directly.
- `function_params` _dict, optional_ - Parameters to be passed to the function. This should be a dictionary where
  keys are the names of the parameters and values are their corresponding values. This is especially useful
  for predefined functions that require specific parameters. Defaults to an empty dictionary.
- `max_segments` _int, optional_ - The maximum number of line segments for the piecewise approximation. Defaults to 500.
- `threshold` _float, optional_ - The error threshold for the approximation. Defaults to 0.01.
- `suppress_warnings` _bool, optional_ - If True, suppresses NumPy polynomial fit warnings. Defaults to True.
  
  The initializer first maps the provided function argument to the corresponding function, either from a set of predefined
  functions or a user-defined function. It then generates a domain of x-values (S) using np.linspace and computes the
  corresponding y-values (y_base) using the provided function and parameters.

#### update\_piecewise\_approximation

```python
def update_piecewise_approximation(n_segments)
```

Updates the piecewise linear approximation with a given number of segments.

**Arguments**:

- `n_segments` _int_ - Number of segments to use in the piecewise approximation.
  

**Returns**:

- `np.ndarray` - Array of y-values approximated by the piecewise linear function.
  

**Notes**:

  This function makes `piecewise_func` and `segments` available in the approximator

#### compute\_error

```python
def compute_error(approx_values)
```

Computes the error of the piecewise linear approximation.

**Arguments**:

- `approx_values` _np.ndarray_ - The approximated y-values of the piecewise linear function.
  

**Returns**:

- `float` - The calculated error of the approximation.

#### compute\_approximation

```python
def compute_approximation()
```

Computes the linear piecewise approximation within the specified error threshold and segment limit.

**Arguments**:

  None
  

**Returns**:

  None
  

**Example**:

    ```python
    approximator = LinearApproximator(S, y_base, max_segments, threshold)
    approximator.compute_approximation()
    ```
  This will compute the approximation and update the class attributes accordingly.
  

**Notes**:

  This method iteratively increases the number of segments until the error threshold is met
  or the maximum number of segments is reached. It uses a binary search approach to find
  the optimal number of segments within these constraints.

#### get\_approximated\_function

```python
def get_approximated_function() -> list[tuple[float, float, float, float]]
```

Generates a set of constraints for each segment of the piecewise linear approximation.

**Arguments**:

  None
  

**Returns**:

  list of tuples: Each tuple contains the definition of one segment or rather linear function.
  The returned tuples are built like `(start, end, slope, intercept)`.

#### apply\_pwl\_to\_model

```python
def apply_pwl_to_model(model: Model, xvar: gp.Var,
                       yvar: gp.Var) -> tuple[Model, gp.Constr]
```

Applies the piecewise linear approximation to a Gurobi optimization model using the addGenConstrPWL method.

**Arguments**:

- `model` _gp.Model_ - The Gurobi model to which a piecewise linear constraint  will be added.
- `xvar` _gp.Var_ - The Gurobi model variable that represents the x-axis in the piecewise linear approximation.
- `yvar` _gp.Var_ - The Gurobi model variable that represents the y-axis in the piecewise linear approximation.
  

**Returns**:

- `model` _gp.Model_ - The Gurobi model but with added piecewise linear constraint.

