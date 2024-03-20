import csv
import time
import numpy as np
import os
import signal
from contextlib import contextmanager
from static_segmentation import linear_approximation_segments
from adaptive_static_segmentation import adaptive_piecewise_linear_approximation
from dynamic_bounds_fitting import fit_piecewise_linear
from bayesian_optimization import bayesian_optimization_pwlf

@contextmanager
def time_limit(seconds):
    def signal_handler(signum, frame):
        raise TimeoutError
    signal.signal(signal.SIGALRM, signal_handler)
    signal.alarm(seconds)
    try:
        yield
    finally:
        signal.alarm(0)

def michaelis_menten(Vmax, Km, S):
    return Vmax * S / (Km + S)

def calculate_normalized_error(y_true, y_approx, S):
    """
    Calculate the normalized error between two sets of y-values over a range of S.
    """
    area = np.trapz(np.abs(y_true - y_approx), S)
    normalization_factor = S[-1] - S[0]
    normalized_error = area / normalization_factor
    return normalized_error

def benchmark_strategy(strategy_func, S, y, *args, **kwargs):
    start_time = time.time()
    try:
        with time_limit(180):  # 180 seconds = 3 minutes
            y_approx, segments_used = strategy_func(S, y, *args, **kwargs)
            execution_time = time.time() - start_time
            error = calculate_normalized_error(y, y_approx, S)
            return (segments_used, execution_time, error, 'completed')
    except TimeoutError:
        print("Timeout occurred")
        return (None, None, None, 'timeout')

def run_benchmarks(S, y_true, Vmax, Km, resolution):
    strategies = [
        ('Static Segmentation', linear_approximation_segments),
        ('Adaptive Static Segmentation', adaptive_piecewise_linear_approximation),
        ('Dynamic Bounds Fitting', fit_piecewise_linear),
        ('Bayesian Optimization', bayesian_optimization_pwlf)
    ]

    results = []
    for name, strategy in strategies:
        print(f"Running benchmark for strategy: {name}")
        segments, time_taken, error, status = benchmark_strategy(strategy, S, y_true)
        results.append([name, segments, time_taken, error, Vmax, Km, resolution,status])

    filename = 'benchmark_results.csv'
    file_exists = os.path.isfile(filename)

    with open(filename, 'a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['Strategy', 'Segments Used', 'Computation Time', 'Normalized Error', 'Vmax', 'Km', 'Resolution', 'Status'])
        writer.writerows(results)


Vmax = [3.2, 210, 600000]
Km = [0.5, 35, 8000]
resolution = [100, 200, 300, 400, 500]
for step in range(3):
    for iteration in range(5):
        Vmax_temp = Vmax[step]
        Km_temp = Km[step]
        resolution_temp = resolution[iteration]
        S = np.linspace(0, Vmax_temp, resolution_temp)
        y = michaelis_menten(Vmax_temp, Km_temp, S)
        run_benchmarks(S, y, Vmax_temp, Km_temp, resolution_temp)


