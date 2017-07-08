export const ADD_EXERCISE = 'add_exercise';
export const REMOVE_EXERCISE = 'remove_exercise';

export const addExercise = (exercise, category) => ({
  type: ADD_EXERCISE,
  payload: {
    ...exercise,
    removeFromCategory: category,
  },
});

export const removeExercise = (exercise, category) => ({
  type: REMOVE_EXERCISE,
  payload: {
    ...exercise,
    addToCategory: category,
  },
});
