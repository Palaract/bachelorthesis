from cobra.io import load_json_model
from linApprox import LinearApproximator, FunctionType

# Load the COBRA model
model = load_json_model('model.json')
print("----------# Optimize biomass #----------")

# Create an instance of LinearApproximator
approximator = LinearApproximator(
    start=0,
    end=663,
    num_points=20,
    function=FunctionType.MICHAELIS_MENTEN,
    function_params={'Vmax': 663, 'Km': 76},
    max_segments=500,
    threshold=0.01
)
approximator.compute_approximation()
approximation = approximator.get_approximated_function()
print(approximation)
print(len(approximation))

# Define the reaction IDs for 'R1' and 'R6'
r1_reaction_id = 'R1'
r2_reaction_id = 'R2'

r1 = model.solver.problem.getVarByName(r1_reaction_id)
r2 = model.solver.problem.getVarByName(r2_reaction_id)

if r1 is None:
    raise ValueError(f"Variable {r1_reaction_id} does not exist in the model.")
if r2 is None:
    raise ValueError(f"Variable {r2_reaction_id} does not exist in the model.")
model, constraint = approximator.apply_pwl_to_model(model, r1, r2)

with open('test.lp', 'w') as out:
    out.write(str(model.solver))

# Optimize the model
solution = model.optimize()
print(solution.status)
print(model.summary())
