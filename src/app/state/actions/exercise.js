export const ADD_EXERCISE = 'add_exercise';
export const REMOVE_EXERCISE = 'remove_exercise';

export const addExercise = (exercise, category, parentId, index) => ({
  type: ADD_EXERCISE,
  payload: {
    ...exercise,
    removeFromCategory: category,
    parentId: parentId,
    index: index,
  },
});

export const removeExercise = (exercise, category, parentId, index) => ({
  type: REMOVE_EXERCISE,
  payload: {
    ...exercise,
    addToCategory: category,
    parentId: parentId,
    index: index,
  },
});
