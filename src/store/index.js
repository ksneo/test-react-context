import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./rootReducer";

let store = null;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function getStore() {
  if (store) {
    return store;
  }
  const sagaMiddleware = createSagaMiddleware();
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  return store;
}

export { getStore };