import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import currencyReducer from './currencies';
import statsReducer from './stats';
export const reducer = combineReducers({
  currency: currencyReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
