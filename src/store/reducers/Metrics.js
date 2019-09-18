import * as actions from '../actions';

const initialState = {};

const metricToggleFetchHandler = (state, action) => {
  return {
    ...state,
    [action.name]: {
      ...state[action.name],
      display: !state[action.name].display
    }
  };
}

const metricSetCategoriesHandler = (state, action) => {
  if(state) return state;
  
  return action.metrics ? action.metrics.reduce((obj, metric) => {
    if (obj[metric] === undefined) {
      obj[metric] = {
        name: metric,
        display: false
      }
    }

    return obj;
  }, {}) : initialState;
}


const handlers = {
  [actions.METRIC_TOGGLE_FETCH]: metricToggleFetchHandler,
  [actions.METRIC_SET_CATEGORIES]: metricSetCategoriesHandler
}

const MetricsReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (handler === undefined) return state;
  return handler(state, action);
}

export const selectActiveMetrics = (state) => {
  const metrics = state.metrics;
  return Object.keys(metrics).filter(metric => metrics[metric].display);
};

export default MetricsReducer;