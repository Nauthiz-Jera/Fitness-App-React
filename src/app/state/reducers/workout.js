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
      let workout = state.workout.concat({
        parent: '',
        name: '',
        colorTag: 'none',
        workoutDay: '',
        exercises: {},
      });
      return {
        ...state,
        workout,
      };
    default:
      return state;
  }
};
