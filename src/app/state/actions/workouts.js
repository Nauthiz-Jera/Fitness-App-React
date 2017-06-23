export const ADD_WORKOUT = 'add_workout';
export const REMOVE_WORKOUT = 'remove_workout';

export const addWorkout = workout => ({
  type: ADD_WORKOUT,
  payload: workout,
});

export const removeWorkout = workout => ({
  type: REMOVE_WORKOUT,
  payload: workout,
});
