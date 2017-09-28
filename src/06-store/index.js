import {compose, createStore, applyMiddleware} from 'redux';
import reducers from '../05-reducers/index';
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
