import { CREATE_WORKOUT } from '../actions/workout';
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_WORKOUT:
      return state;
    default:
      return state;
  }
};
