export const ADD_WORKOUT = 'add_workout';

export const addWorkout = workout => ({
  type: 'ADD_WORKOUT',
  payload: {
    ...workout,
  },
});
