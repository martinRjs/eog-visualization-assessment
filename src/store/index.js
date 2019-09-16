import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import weatherReducer from "./reducers/Weather";
import metricsReducer from './reducers/Metrics';
import chartReducer from './reducers/Chart';

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    metrics: metricsReducer,
    chart: chartReducer
  });

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  sagas.forEach(sagaMiddleware.run);

  return store;
};
