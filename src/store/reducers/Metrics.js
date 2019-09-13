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
    currentValue: 0,
    data: []
  },
  [Metrics.INJ_VALVE_OPEN]: {
    name: Metrics.INJ_VALVE_OPEN,
    display: false,
    currentValue: 0,
    data: []
  },
  [Metrics.TUBING_PRESSURE]: {
    name: Metrics.TUBING_PRESSURE,
    display: false,
    currentValue: 0,
    data: []
  },
  [Metrics.OIL_TEMP]: {
    name: Metrics.OIL_TEMP,
    display: false,
    currentValue: 0,
    data: []
  },
  [Metrics.WATER_TEMP]: {
    name: Metrics.WATER_TEMP,
    display: false,
    currentValue: 0,
    data: []
  },
  [Metrics.CASING_PRESSURE]: {
    name: Metrics.CASING_PRESSURE,
    display: false,
    currentValue: 0,
    data: []
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

const metricUpdateHandler = (state, action) => {
  return {
    ...state,
    [action.name]: {
      ...state[action.name],
      currentValue: action.value
    }
  };
}

const handlers = {
  [actions.METRIC_TOGGLE]: metricToggleHandler,
  [actions.METRIC_UPDATE]: metricUpdateHandler
}

const MetricsReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (handler === undefined) return state;
  return handler(state, action);
}


export default MetricsReducer;