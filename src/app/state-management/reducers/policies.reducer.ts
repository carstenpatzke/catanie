import { createReducer, on, Action } from "@ngrx/store";
import {
  initialPolicyState,
  PolicyState
} from "state-management/state/policies.store";
import * as fromActions from "state-management/actions/policies.actions";

const reducer = createReducer(
  initialPolicyState,
  on(fromActions.fetchPoliciesCompleteAction, (state, { policies }) => ({
    ...state,
    policies
  })),

  on(fromActions.fetchCountCompleteAction, (state, { count }) => ({
    ...state,
    totalCount: count
  })),

  on(
    fromActions.fetchEditablePoliciesCompleteAction,
    (state, { policies }) => ({
      ...state,
      editablePolicies: policies
    })
  ),

  on(fromActions.fetchEditableCountCompleteAction, (state, { count }) => ({
    ...state,
    editableCount: count
  })),

  on(fromActions.selectPolicyAction, (state, { policy }) => {
    const alreadySelected = state.selectedPolicies.find(
      existing => existing.id === policy.id
    );
    if (alreadySelected) {
      return state;
    } else {
      const selectedPolicies = state.selectedPolicies.concat(policy);
      return { ...state, selectedPolicies };
    }
  }),
  on(fromActions.deselectPolicyAction, (state, { policy }) => {
    const selectedPolicies = state.selectedPolicies.filter(
      selectedPolicy => selectedPolicy.id !== policy.id
    );
    return { ...state, selectedPolicies };
  }),

  on(fromActions.selectAllPoliciesAction, state => {
    const selectedPolicies = state.editablePolicies;
    return { ...state, selectedPolicies };
  }),
  on(fromActions.clearSelectionAction, state => ({
    ...state,
    selectedPolicies: []
  })),

  on(fromActions.changePageAction, (state, { page, limit }) => {
    const skip = page * limit;
    const policiesFilters = { ...state.policiesFilters, skip, limit };
    return { ...state, policiesFilters };
  }),
  on(fromActions.changeEditablePageAction, (state, { page, limit }) => {
    const skip = page * limit;
    const editableFilters = { ...state.editableFilters, skip, limit };
    return { ...state, editableFilters };
  }),

  on(fromActions.sortByColumnAction, (state, { column, direction }) => {
    const sortField = column + (direction ? ":" + direction : "");
    const policiesFilters = { ...state.policiesFilters, sortField, skip: 0 };
    return { ...state, policiesFilters };
  }),
  on(fromActions.sortEditableByColumnAction, (state, { column, direction }) => {
    const sortField = column + (direction ? ":" + direction : "");
    const editableFilters = { ...state.editableFilters, sortField, skip: 0 };
    return { ...state, editableFilters };
  })
);

export function policiesReducer(
  state: PolicyState | undefined,
  action: Action
) {
  if (action.type.indexOf("[Policy]") !== -1) {
    console.log("Action came in! " + action.type);
  }
  return reducer(state, action);
}
