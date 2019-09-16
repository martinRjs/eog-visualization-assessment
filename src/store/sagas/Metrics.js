import {takeEvery} from 'redux-saga/effects';



function* watchMetricNewValue(params) {
  yield takeEvery('SAGA_TEST', (action) => {
    // console.log(action);
  })
}

export default [watchMetricNewValue];