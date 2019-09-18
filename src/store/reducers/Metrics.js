import * as actions from '../actions';
import {Metrics} from '../../utils';

const initialState = {
  [Metrics.FLARE_TEMP]: {
    name: Metrics.FLARE_TEMP,
    display: false
  },
  [Metrics.INJ_VALVE_OPEN]: {
    name: Metrics.INJ_VALVE_OPEN,
    display: false
  },
  [Metrics.TUBING_PRESSURE]: {
    name: Metrics.TUBING_PRESSURE,
    display: false,
  },
  [Metrics.OIL_TEMP]: {
    name: Metrics.OIL_TEMP,
    display: false
  },
  [Metrics.WATER_TEMP]: {
    name: Metrics.WATER_TEMP,
    display: false
  },
  [Metrics.CASING_PRESSURE]: {
    name: Metrics.CASING_PRESSURE,
    display: false
  }
};

const metricToggleFetchHandler = (state, action) => {
  return {
    ...state,
    [action.name]: {
      ...state[action.name],
      display: !state[action.name].display
    }
  };
}

const metricEnableToggle = (state, action) => {
  return {
    ...state,
    [action.name]: {
      ...state[action.name],
      display: true
    }
  };
}

const handlers = {
  [actions.METRIC_TOGGLE_FETCH]: metricToggleFetchHandler,
  [actions.CHART_SET_ACTIVE_METRIC]: metricEnableToggle
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