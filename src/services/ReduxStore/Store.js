import rootReducer from "./Reducers";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)
  ));

  export default store;