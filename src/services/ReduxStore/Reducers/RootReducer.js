import { combineReducers } from 'redux';
import newAndpopular from './newAndpopular';

const rootReducer = combineReducers({
  newandpopular:newAndpopular
});

export default rootReducer;