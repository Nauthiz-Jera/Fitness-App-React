export const ADD_PLAN = 'add_plan';
export const REMOVE_PLAN = 'remove_plan';
export const UPDATE_PLAN = 'update_plan';

export const addPlan = plan => ({
  type: ADD_PLAN,
  payload: {
    ...plan,
  },
});
