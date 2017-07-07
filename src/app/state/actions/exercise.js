export const ADD_EXERCISE = 'add_exercise';
export const REMOVE_EXERCISE = 'remove_exercise';

export const addExercise = (workout, category) => ({
  type: ADD_EXERCISE,
  payload: {
    ...workout,
    removeFromCategory: category,
  },
});

export const removeExercise = (workout, category) => ({
  type: REMOVE_EXERCISE,
  payload: {
    ...workout,
    addToCategory: category,
  },
});
