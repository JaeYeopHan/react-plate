import { createAction } from 'redux-actions'
import { all, call, put } from 'redux-saga/effects'

export function createAsyncAction(type) {
  // Create Action Types
  const FETCH = `${type}/FETCH`
  const PENDING = `${type}/PENDING`
  const SUCCESS = `${type}/SUCCESS`
  const FAILURE = `${type}/FAILURE`

  return {
    FETCH,
    PENDING,
    SUCCESS,
    FAILURE,
    fetch: createAction(FETCH),
    pending: createAction(PENDING),
    success: createAction(SUCCESS, payload => payload),
    failure: createAction(FAILURE, payload => payload),
  }
}

export function createSaga(type, req) {
  const actions = createAsyncAction(type)

  return function*(action) {
    const payload = (action && action.payload) || null

    yield put(actions.pending())
    try {
      if (typeof req === 'function') {
        const res = yield call(req, payload)
        yield put(actions.success(res))
      }

      if (Array.isArray(req)) {
        const res = yield all(req.map(r => () => call(r)))
        yield put(actions.success(res))
      }
    } catch (e) {
      yield put(actions.failure(e))
    }
  }
}
