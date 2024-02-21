import { combineReducers } from 'redux';
import exercise from './exerciseReducer';
import landing from './landingReducer';

const rootReducer = combineReducers({
  exercise,
  landing,
});

export default rootReducer;
