import * as actions from '../actions';
import { loadState } from '../../store/localStorage';

const savedState = loadState();

const initialState = savedState ? savedState.chart :{
  activeMetric: "",
  data: []
};

const addMetricDataHandler = (state, action) => {
  return {
    ...state,
    data: action.data
  }
}

const setActiveMetric = (state, action) => {
  return {
    ...state,
    activeMetric: action.name
  }
}

const handlers = {
  [actions.CHART_ADD_DATA]: addMetricDataHandler,
  [actions.CHART_SET_ACTIVE_METRIC]: setActiveMetric
}

const ChartReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (handler === undefined) return state;
  return handler(state, action);
}

export default ChartReducer;