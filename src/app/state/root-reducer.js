import { combineReducers } from 'redux';
import exercise from './reducers/exercise';
import workout from './reducers/workout';

export default combineReducers({
  exercise,
  workout,
});
