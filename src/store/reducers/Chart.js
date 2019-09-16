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

const removeMetricDataHandler = (state, action) => {
  return state;
}

const handlers = {
  [actions.CHART_ADD_DATA]: addMetricDataHandler,
  [actions.CHART_REMOVE_DATA]: removeMetricDataHandler
}

const ChartReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (handler === undefined) return state;
  return handler(state, action);
}

export default ChartReducer;