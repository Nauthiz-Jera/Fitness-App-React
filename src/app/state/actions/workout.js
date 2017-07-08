export const CREATE_WORKOUT = 'create_workout';

export const createWorkout = workout => ({
  type: 'create_workout',
  payload: {
    ...workout,
  },
});
