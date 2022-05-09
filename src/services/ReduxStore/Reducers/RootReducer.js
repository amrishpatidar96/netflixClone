import { combineReducers } from 'redux';
import newAndpopular from './newAndpopular';
import moviesReducer from './movies';

const rootReducer = combineReducers({
  newandpopular:newAndpopular,
  movies: moviesReducer
});

export default rootReducer;