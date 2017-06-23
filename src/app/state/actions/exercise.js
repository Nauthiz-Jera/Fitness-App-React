export const ADD_EXERCISE = 'add_exercise';
export const REMOVE_EXERCISE = 'remove_exercise';

export const addExercise = workout => ({
  type: ADD_EXERCISE,
  payload: workout,
});

export const removeExercise = workout => ({
  type: REMOVE_EXERCISE,
  payload: workout,
});
