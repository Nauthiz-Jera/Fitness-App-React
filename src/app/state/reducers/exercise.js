import { ADD_EXERCISE, REMOVE_EXERCISE } from '../actions/exercise';
import _ from 'lodash';

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
      let { id, removeFromCategory, parentId, index } = action.payload;
      /*let deleteIndex = _.findIndex(state[removeFromCategory], o => {
        return o.id === id;
      });*/
      let exercises = {
        ...state.selectedExercises,
      };
      let doesExist = _.findKey(exercises[parentId], index);
      if (!doesExist) {
        exercises[parentId] = { [index]: [{ [id]: action.payload }] };
      } else {
        exercises[parentId][index].push({ [id]: action.payload });
      }

      //state[removeFromCategory].splice(deleteIndex, 1);
      return {
        ...state,
        parentId: parentId,
        index: index,
        selectedExercises: {
          ...exercises,
        },
      };
    case REMOVE_EXERCISE:
      let { addToCategory } = action.payload;
      let selectedExercises = { ...state.selectedExercises };
      let parent = action.payload.parentId;
      let removeIndex = action.payload.index;
      console.log('remove: ', action.payload.id);

      selectedExercises[parent][removeIndex] = _.filter(
        selectedExercises[parent][removeIndex],
        function(exercise) {
          console.log('exercise', exercise);
          return Object.keys(exercise)[0] !== action.payload.id;
        },
      );

      //state[addToCategory].unshift(action.payload);
      return {
        ...state,
        selectedExercises,
      };
    default:
      return state;
  }
};
