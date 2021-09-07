import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import currencyReducer from './currencies';
export const reducer = combineReducers({
  currency: currencyReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
