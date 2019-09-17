import * as actions from '../actions';

const initialState = {
  activeMetric: "",
  data: []
};

const addMetricDataHandler = (state, action) => {
  console.log('add data', action);
  let newState = [...state];
  
  let formattedData = action.data.map(item => {
    return {
      [item.metric]: item.value,
      at: item.at,
      unit: item.unit
    }
  });

  newState.push(...formattedData);

  return newState;
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