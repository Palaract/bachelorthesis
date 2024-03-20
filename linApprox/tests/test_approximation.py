
import unittest
import numpy as np
from linApprox.approximation import LinearApproximator
from linApprox.functions import FunctionType, FUNCTION_MAP

class TestLinearApproximator(unittest.TestCase):
    def setUp(self):
        self.start = 0
        self.end = 10
        self.num_points = 100
        self.function = FunctionType.MICHAELIS_MENTEN
        self.function_params = {'Vmax': 1, 'Km': 0.5}
        self.max_segments = 500
        self.threshold = 0.01
        self.suppress_warnings = True
        self.approximator = LinearApproximator(self.start, self.end, self.num_points, self.function, self.function_params, self.max_segments, self.threshold, self.suppress_warnings)

    def test_update_piecewise_approximation(self):
        n_segments = 10
        self.approximator.update_piecewise_approximation(n_segments)
        self.assertEqual(len(self.approximator.segments), n_segments-1)

    def test_compute_error(self):
        func = FUNCTION_MAP[self.function]
        approx_values = [ func(x, **self.function_params) for x in np.linspace(self.start, self.end, self.num_points)]
        error = self.approximator.compute_error(approx_values)
        self.assertTrue(0 <= error <= self.threshold)

if __name__ == '__main__':
    unittest.main()
