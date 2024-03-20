from bokeh.plotting import figure, show
from bokeh.io import output_file
from bokeh.layouts import gridplot
from override import SolutionOverride
from cobra.io import load_json_model
from linApprox import LinearApproximator, FunctionType

# Initialize Variables for the simulation
Km = 35
Vmax = 210
Pt = 0.02
Gmax = 0.76
Ks = 7160
Ac = 6
Ext_glc = 5

# Variables for lates
uptake_rate = 0
growth_rate = 0
cell_volume = 0
membrane_space = 0

# Load the COBRA model
model = load_json_model("model.json")

def calculate_uptake_rate(Pt, Ac, Vmax, Km, Ext_glc):
    return Pt * Ac * Vmax * (Ext_glc / (Km + Ext_glc))

def calculate_growth_rate(urate, gmax):
    return gmax * urate

def calculate_cell_volume(grate):
    return 1.41 * grate +1.98

def calculate_membrane_space(cvolume):
    return cvolume * 0.5

plots = []  # Collect all plots to show them at once

objective_values = []
flux_uptake_rates = []
cell_volumes = []
membrane_spaces = []
glucose_uptake_rates = []
external_glucoses = []

for i in range(0, 10):
    print(f"----- Cycle Number {i} -----")
    print(f"Starting Approximation...")
    approximator = LinearApproximator(
        start=0,
        end=Ext_glc,
        num_points=50,
        function=FunctionType.UPTAKE_RATE,
        function_params={'Pt': Pt, 'Ac': Ac, 'Vmax': Vmax, 'Km': Km},
        max_segments=500,
        threshold=0.01
    )

    approximator.compute_approximation()
    approximation = approximator.get_approximated_function()

    # Bokeh plot for current cycle
    p = figure(title=f'Cycle {i}: Piecewise Linear Approximation of Glucose Uptake', 
               x_axis_label='External Glucose Concentration', y_axis_label='Uptake Rate',
               sizing_mode='scale_width')
    
    for segment in approximation:
        start, end, slope, intercept = segment
        x = [start, end]
        y = [slope*start + intercept, slope*end + intercept]
        p.line(x, y, legend_label=f"Segment {start} to {end}", line_width=2)
    
    plots.append(p)

    # Create a new variable
    external_glucose_var = model.solver.problem.addVar(name='Glucose_External', lb=-Ext_glc, ub=Ext_glc)
    internal_glucose_var = model.solver.problem.getVarByName('R1')

    if internal_glucose_var is None:
        raise ValueError(f"Variable {internal_glucose_var} does not exist in the model.")

    model, constraint = approximator.apply_pwl_to_model(model, external_glucose_var, internal_glucose_var)

    model = SolutionOverride(model)
    print("Optimizing the model...")
    solution = model.optimize()
    print("Objective Value: ", solution.objective_value)
    flux_uptake_rate = solution.fluxes['R1']
    print("Flux Uptake Rate: ", flux_uptake_rate)
    cell_volume = calculate_cell_volume(solution.objective_value)
    print("Cell Volume: ", cell_volume)
    membrane_space = calculate_membrane_space(cell_volume)
    print("Membrane Space: ", membrane_space)
    Ac = membrane_space
    print("Glucose Uptake Rate: ", calculate_uptake_rate(Pt, Ac, Vmax, Km, Ext_glc))

    objective_values.append(solution.objective_value)
    flux_uptake_rates.append(flux_uptake_rate)
    cell_volumes.append(cell_volume)
    membrane_spaces.append(membrane_space)
    glucose_uptake_rates.append(calculate_uptake_rate(Pt, Ac, Vmax, Km, Ext_glc))
    external_glucoses.append(Ext_glc)

    Ext_glc = Ext_glc - 0.5
    print("External Glucose: ", Ext_glc)
    print("----- Cycle End -----")

# After loop, prepare plots for collected data
output_file("simulation_results.html")

# Create plots for each metric
objective_plot = figure(title="Objective Value over Cycles", x_axis_label='Cycle', y_axis_label='Objective Value')
objective_plot.line(list(range(10)), objective_values, legend_label="Objective Value", line_width=2)

flux_plot = figure(title="Flux Uptake Rate over Cycles", x_axis_label='Cycle', y_axis_label='Flux Uptake Rate')
flux_plot.line(list(range(10)), flux_uptake_rates, legend_label="Flux Uptake Rate", line_width=2)

cell_volume_plot = figure(title="Cell Volume over Cycles", x_axis_label='Cycle', y_axis_label='Cell Volume')
cell_volume_plot.line(list(range(10)), cell_volumes, legend_label="Cell Volume", line_width=2)

membrane_space_plot = figure(title="Membrane Space over Cycles", x_axis_label='Cycle', y_axis_label='Membrane Space')
membrane_space_plot.line(list(range(10)), membrane_spaces, legend_label="Membrane Space", line_width=2)

glucose_uptake_plot = figure(title="Glucose Uptake Rate over Cycles", x_axis_label='Cycle', y_axis_label='Glucose Uptake Rate')
glucose_uptake_plot.line(list(range(10)), glucose_uptake_rates, legend_label="Glucose Uptake Rate", line_width=2)

external_glucose_plot = figure(title="External Glucose over Cycles", x_axis_label='Cycle', y_axis_label='External Glucose')
external_glucose_plot.line(list(range(10)), external_glucoses, legend_label="External Glucose", line_width=2)

# Combine all plots in a grid and show
plots = gridplot([[objective_plot, flux_plot], [cell_volume_plot, membrane_space_plot], [glucose_uptake_plot, external_glucose_plot]], width=500, height=500)
show(plots)