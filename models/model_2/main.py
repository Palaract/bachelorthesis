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

# Define the reaction IDs for 'R1' and 'R6'
r1_reaction_id = 'R1'

# Iterate through each segment
for i, segment in enumerate(approximator.segments):
    print(segment)
    start, end = segment

    # Set the constraint for the current segment
    model.reactions.get_by_id(r1_reaction_id).upper_bound = approximator.piecewise_func[i][0] * start + approximator.piecewise_func[i][1]
    print(f"Constraint for Segment {i}: {approximator.piecewise_func[i][0] * start + approximator.piecewise_func[i][1]}")

    # Optimize the model
    model.objective = 'R7'
    solution = model.optimize()

    # Process the solution for the current segment
    if solution.status == 'infeasible':
        print(f"Segment {i+1}: Model is infeasible for the current segment.")
    else:
        print(f"Segment {i+1}: Optimal biomass production for segment: {solution.objective_value}")
        print(model.summary())

    # Reset the upper bound for 'R1' to its original value
    model.reactions.get_by_id(r1_reaction_id).upper_bound = 1000  # Replace '1000' with the original upper bound value
