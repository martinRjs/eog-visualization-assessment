import * as actions from '../actions';


const Metrics = {
  TUBING_PRESSURE: 'tubingPressure',
  FLARE_TEMP: 'flareTemp',
  INJ_VALVE_OPEN: 'injValveOpen',
  OIL_TEMP: 'oilTemp',
  CASING_PRESSURE: 'casingPressure',
  WATER_TEMP: 'waterTemp'
}

const initialState = {
  [Metrics.FLARE_TEMP]: {
    name: Metrics.FLARE_TEMP,
    display: false,
  },
  [Metrics.INJ_VALVE_OPEN]: {
    name: Metrics.INJ_VALVE_OPEN,
    display: false,
  },
  [Metrics.TUBING_PRESSURE]: {
    name: Metrics.TUBING_PRESSURE,
    display: false,
  },
  [Metrics.OIL_TEMP]: {
    name: Metrics.OIL_TEMP,
    display: false,
  },
  [Metrics.WATER_TEMP]: {
    name: Metrics.WATER_TEMP,
    display: false,
  },
  [Metrics.CASING_PRESSURE]: {
    name: Metrics.CASING_PRESSURE,
    display: false,
  }
};

const metricToggleHandler = (state, action) => {
  return {
    ...state,
    [action.name]: {
      ...state[action.name],
      display: !state[action.name].display
    }
  };
}

const handlers = {
  [actions.METRIC_TOGGLE]: metricToggleHandler
}

const MetricsReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (handler === undefined) return state;
  return handler(state, action);
}

export default MetricsReducer;