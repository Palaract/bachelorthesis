# Fixing shit. I can't believe that this needs to be done
import cobra
from cobra.core import Solution
from cobra.util.solver import check_solver_status
from cobra import Model, Reaction, Metabolite
from typing import Optional, Iterable
import numpy as np
import pandas as pd

def _get_solution(
    model: "Model",
    reactions: Optional[Iterable["Reaction"]] = None,
    metabolites: Optional[Iterable["Metabolite"]] = None,
    raise_error: bool = False,
) -> Solution:
    """
    Generate a solution representation of the current solver state.

    Parameters
    ---------
    model : cobra.Model
        The model whose reactions to retrieve values for.
    reactions : list, optional
        An iterable of `cobra.Reaction` objects. Uses `model.reactions`
        if None (default None).
    metabolites : list, optional
        An iterable of `cobra.Metabolite` objects. Uses `model.metabolites`
        if None (default None).
    raise_error : bool
        If True, raise an OptimizationError if solver status is not optimal
        (default False).

    Returns
    -------
    cobra.Solution

    """
    check_solver_status(model.solver.status, raise_error=raise_error)
    if reactions is None:
        reactions = model.reactions
    if metabolites is None:
        metabolites = model.metabolites

    rxn_index = []
    fluxes = np.empty(len(reactions))
    reduced = np.empty(len(reactions))
    var_primals = model.solver.primal_values
    shadow = np.empty(len(metabolites))
    if model.solver.is_integer:
        reduced.fill(np.nan)
        shadow.fill(np.nan)
        for i, rxn in enumerate(reactions):
            rxn_index.append(rxn.id)
            fluxes[i] = var_primals[rxn.id] - var_primals[rxn.reverse_id]
        met_index = [met.id for met in metabolites]
    elif model.solver.problem.getAttr('NumGenConstrs') > 0:
        for i, rxn in enumerate(reactions):
            forward = rxn.id
            reverse = rxn.reverse_id
            rxn_index.append(forward)
            fluxes[i] = var_primals[forward] - var_primals[reverse]
        met_index = []
        for i, met in enumerate(metabolites):
            met_index.append(met.id)
    else:
        var_duals = model.solver.reduced_costs
        for i, rxn in enumerate(reactions):
            forward = rxn.id
            reverse = rxn.reverse_id
            rxn_index.append(forward)
            fluxes[i] = var_primals[forward] - var_primals[reverse]
            reduced[i] = var_duals[forward] - var_duals[reverse]
        met_index = []
        constr_duals = model.solver.shadow_prices
        for i, met in enumerate(metabolites):
            met_index.append(met.id)
            shadow[i] = constr_duals[met.id]
    return Solution(
        objective_value=model.solver.objective.value,
        status=model.solver.status,
        fluxes=pd.Series(index=rxn_index, data=fluxes, name="fluxes"),
        reduced_costs=pd.Series(index=rxn_index, data=reduced, name="reduced_costs"),
        shadow_prices=pd.Series(index=met_index, data=shadow, name="shadow_prices"),
    )

class SolutionOverride(cobra.Model):
    def __init__(self, *args, **kwargs):
        super(SolutionOverride, self).__init__(*args, **kwargs)

    def optimize(
        self, objective_sense: Optional[str] = None, raise_error: bool = False
    ) -> "Solution":
        """
        Optimize the model using flux balance analysis.

        Parameters
        ----------
        objective_sense : {None, 'maximize' 'minimize'}, optional
            Whether fluxes should be maximized or minimized. In case of None,
            the previous direction is used (default None).
        raise_error : bool
            If true, raise an OptimizationError if solver status is not
             optimal (default False).

        Returns
        -------
        Solution

        Notes
        -----
        Only the most commonly used parameters are presented here.  Additional
        parameters for cobra.solvers may be available and specified with the
        appropriate keyword argument.

        """
        original_direction = self.objective.direction
        self.objective.direction = {"maximize": "max", "minimize": "min"}.get(
            objective_sense, original_direction
        )
        self.slim_optimize()
        solution = _get_solution(self, raise_error=raise_error)
        self.objective.direction = original_direction
        return solution