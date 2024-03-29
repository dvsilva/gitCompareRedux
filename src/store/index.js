import { createStore, compose, applyMiddleware } from 'redux';

// import reducers from "./reducers";

import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
// const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

// const store = createStore(reducers);

// const createAppropriateStore = process.env.NODE_ENV === "development" ? console.tron.createStore : createStore;

// const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));
// const store = createStore(reducers, compose(applyMiddleware(...[])));

const enhancers = compose(applyMiddleware(...middlewares));

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers, enhancers);

sagaMiddleware.run(sagas);

export default store;
