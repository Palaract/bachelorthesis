import matplotlib
matplotlib.use('QtAgg')
import matplotlib.pyplot as plt
from matplotlib.ticker import MaxNLocator
from matplotlib import rcParams
rcParams['mathtext.default'] = 'rm'
import seaborn as sns
from override import SolutionOverride
from cobra.io import read_sbml_model
from linApprox import LinearApproximator, FunctionType
import csv

# Initialize Variables for the simulation
Km = 35
Vmax = 210
Pt = 0.02
Gmax = 0.76
Ks = 7160
Ac = 6
Ext_glc = 50

# Lists for storing results
cycles = []
objective_values = []
flux_uptake_rates = []
cell_volumes = []
membrane_spaces = []
glucose_uptake_rates = []
external_glucoses = []

sns.color_palette('colorblind')

uptake_rate = 0
growth_rate = 0
cell_volume = 0
membrane_space = 0

model = read_sbml_model("iML1515.xml")

def calculate_uptake_rate(Pt, Ac, Vmax, Km, Ext_glc):
    return Pt * Ac * Vmax * (Ext_glc / (Km + Ext_glc))

def calculate_cell_volume(grate):
    return 1.41 * grate +1.98
    
def calculate_membrane_space(cvolume):
    return cvolume * 0.6

for i in range(0, 100):
    print(f"----- Cycle Number {i} -----")
    print(f"Starting Approximation...")
    print(f"Km: {Km}, Vmax: {Vmax}, Pt: {Pt}, Ac: {Ac}")

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

    external_glucose_var = model.solver.problem.addVar(name='Glucose_External', lb=-Ext_glc, ub=Ext_glc)
    internal_glucose_var = model.solver.problem.getVarByName('EX_glc__D_e')
    model.solver.problem.getVarByName('EX_glc__D_e').setAttr('lb',-Ext_glc)
    model.solver.problem.getVarByName('EX_glc__D_e').setAttr('ub',Ext_glc)

    if external_glucose_var is None:
        raise ValueError(f"Variable {external_glucose_var} does not exist in the model.")

    model, constraint = approximator.apply_pwl_to_model(model, external_glucose_var, internal_glucose_var)

    model = SolutionOverride(model)
    print("Optimizing the model...")
    solution = model.optimize()
    print("Objective Value: ", solution.objective_value)
    flux_uptake_rate = solution.fluxes['EX_glc__D_e']
    print("Flux Uptake Rate: ", flux_uptake_rate)
    cell_volume = calculate_cell_volume(solution.objective_value)
    print("Cell Volume: ", cell_volume)
    membrane_space = calculate_membrane_space(cell_volume)
    print("Membrane Space: ", membrane_space)
    Ac = membrane_space
    print("Glucose Uptake Rate: ", calculate_uptake_rate(Pt, Ac, Vmax, Km, Ext_glc))

    cycles.append(i)
    objective_values.append(solution.objective_value)
    flux_uptake_rates.append(flux_uptake_rate)
    cell_volumes.append(cell_volume)
    membrane_spaces.append(membrane_space)
    glucose_uptake_rates.append(calculate_uptake_rate(Pt, Ac, Vmax, Km, Ext_glc))
    external_glucoses.append(Ext_glc)

    Ext_glc = Ext_glc - 0.3
    print("External Glucose: ", Ext_glc)
    print(external_glucose_var.lb, external_glucose_var.ub)
    print("----- Cycle End -----")

data = [
    {
        "Cycle": cycle,
        "Objective Value": obj_val,
        "Flux Uptake Rate": flux_rate,
        "Cell Volume": cell_vol,
        "Membrane Space": mem_space,
        "Glucose Uptake Rate": glu_rate,
        "External Glucose": ext_glc
    }
    for cycle, obj_val, flux_rate, cell_vol, mem_space, glu_rate, ext_glc in zip(
        cycles, objective_values, flux_uptake_rates, cell_volumes, membrane_spaces, glucose_uptake_rates, external_glucoses
    )
]

csv_file_name = 'simulation_data.csv'

with open(csv_file_name, mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=data[0].keys())
    writer.writeheader()
    writer.writerows(data)

print(f"Data successfully written to {csv_file_name}.")
sns.set_theme(font_scale=1.3, style='ticks')
fig1, (ax0, ax1) = plt.subplots(2, 1, figsize=(10, 8), sharex=True)
ax0.plot(cycles, external_glucoses, label='External glucose [$mmol \, l^{-1}$]', linestyle='--')
ax0.plot(cycles, flux_uptake_rates, label=r'Flux uptake rate [$mmol \, g_{DW}^{-1} \, hr^{-1}$]')
ax0.legend()
ax0.tick_params(axis='x', which='both', bottom=False, top=False, labelbottom=False)
ax0.yaxis.set_major_locator(MaxNLocator(min_n_ticks=4, integer=True))

ax1.plot(cycles, objective_values, label='Growth rate [$h^{-1}$]', linestyle='-')
ax1.plot(cycles, cell_volumes, label='Cell volume [$µm^3$]', linestyle='--')
ax1.plot(cycles, membrane_spaces, label='Membrane space [$µm^2$]', linestyle='-.')
ax1.plot(cycles, glucose_uptake_rates, label=r'Glucose uptake rate [$mmol \, g_{DW}^{-1} \, hr^{-1}$]', linestyle=':')
ax1.set_xlabel('Cycle count')
ax1.legend()
ax1.yaxis.set_major_locator(MaxNLocator(min_n_ticks=4, integer=True))
plt.setp(ax0.get_legend().get_texts(), fontsize='14')
plt.setp(ax1.get_legend().get_texts(), fontsize='14')
plt.subplots_adjust(hspace=0.05)
sns.set_theme(font_scale=2.0, style='ticks')
fig2 = plt.figure(figsize=(8, 8))
ax1 = fig2.add_subplot(1, 1, 1)
sns.scatterplot(x=glucose_uptake_rates, y=cell_volumes, ax=ax1, s=50, color="blue", edgecolor=None, linewidth=0, alpha=0.7)
ax1.set_title('Glucose uptake rate vs cell volume')
ax1.set_xlabel('Glucose uptake rate [$mmol \, g_{DW}^{-1} \, hr^{-1}$]')
ax1.set_ylabel('Cell volume [$µm^3$]')

fig3 = plt.figure(figsize=(8, 8))
ax2 = fig3.add_subplot(1, 1, 1)
sns.scatterplot(x=external_glucoses, y=glucose_uptake_rates, ax=ax2, s=50, color="blue", edgecolor=None, linewidth=0, alpha=0.7)
ax2.set_title('External glucose vs glucose uptake rate')
ax2.set_xlabel('External glucose [$mmol \, l^{-1}$]')
ax2.set_ylabel('Glucose uptake rate [$mmol \, g_{DW}^{-1} \, hr^{-1}$]')

fig1.savefig('First.pdf', format='pdf')
fig2.savefig('Second.pdf', format='pdf')
fig3.savefig('Third.pdf', format='pdf')

plt.tight_layout()
plt.show()