import { ADD_WORKOUT } from '../actions/workout';
const INITIAL_STATE = {
  workout: [
    {
      parent: '',
      name: '',
      colorTag: 'none',
      workoutDay: '',
      exercises: {},
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      console.log('add workout called');
      state.workout.push({
        parent: 'name your plan',
        name: 'new workout',
        colorTag: 'none',
        workoutDay: '',
        exercises: {},
      });
      return {
        ...state,
      };
    default:
      return state;
  }
};
