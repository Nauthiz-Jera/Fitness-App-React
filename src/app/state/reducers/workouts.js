import { ADD_WORKOUT, REMOVE_WORKOUT } from '../actions/workouts';

const INITIAL_STATE = {
  legs: [
    {
      name: 'Squats',
      id: 'squats',
    },
    {
      name: 'Lunges',
      id: 'lunges',
    },
    {
      name: 'Leg Press',
      id: 'legPress',
    },
    {
      name: 'Leg Curls',
      id: 'legCurls',
    },
    {
      name: 'Hip Abducturs',
      id: 'hipAbducturs',
    },
    {
      name: 'Hip Adduction',
      id: 'hipAdduction',
    },
  ],
  back: [
    {
      name: 'Dead Lift',
      id: 'deadLift',
    },
    {
      name: 'Pendlay Rows',
      id: 'pendlayRows',
    },
    {
      name: 'Dumbell Rows',
      id: 'dumbellRows',
    },
    {
      name: 'Pull-ups',
      id: 'pullUps',
    },
    {
      name: 'Barbell Rows',
      id: 'barbellRows',
    },
  ],
  chest: [
    {
      name: 'Bench',
      id: 'Bench',
    },
    {
      name: 'Incline Bench',
      id: 'inclineBench',
    },
    {
      name: 'Dumbell Flies',
      id: 'dumbellFlies',
    },
  ],
  arms: [
    {
      name: 'Barbell Curls',
      id: 'barbellCurls',
    },
    {
      name: 'Close-grip Bench',
      id: 'closeGripBench',
    },
    {
      name: 'Tricep Extensions',
      id: 'tricepExtensions',
    },
  ],
  selectedWorkouts: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      let { id } = action.payload;
      return {
        ...state,
        selectedWorkouts: {
          ...state.selectedWorkouts,
          [id]: action.payload,
        },
      };
    case REMOVE_WORKOUT:
      let selectedWorkouts = { ...state.selectedWorkouts };
      delete selectedWorkouts[action.payload.id];

      return {
        ...state,
        selectedWorkouts,
      };
    // return Object.assign({}, state, {
    //   selectedWorkouts: state.selectedWorkouts.concat(action.payload),
    // });
    default:
      return state;
  }
};
