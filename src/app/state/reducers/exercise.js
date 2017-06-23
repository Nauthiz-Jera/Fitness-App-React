import { ADD_EXERCISE, REMOVE_EXERCISE } from '../actions/exercise';

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
  selectedExercises: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      let { id } = action.payload;
      return {
        ...state,
        selectedExercises: {
          ...state.selectedExercises,
          [id]: action.payload,
        },
      };
    case REMOVE_EXERCISE:
      let selectedExercises = { ...state.selectedExercises };
      delete selectedExercises[action.payload.id];

      return {
        ...state,
        selectedExercises,
      };
    default:
      return state;
  }
};
