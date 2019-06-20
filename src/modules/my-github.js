import { createAction, handleActions } from 'redux-actions'
import { put, call, takeLatest } from 'redux-saga/effects'

import { getMyGitHubProfile } from 'api'

export const initialState = {
  isLoading: true,
  contents: 'contents',
  errorMessage: '',
}

const NAMESPACE = 'myGitHub'

const FETCH = `${NAMESPACE}/FETCH`
const FETCH_PENDING = `${NAMESPACE}/PENDING`
const FETCH_SUCCESS = `${NAMESPACE}/FETCH_SUCCESS`
const FETCH_FAIL = `${NAMESPACE}/FETCH_FAIL`

export const fetch = createAction(FETCH)
export const fetchPending = createAction(FETCH_PENDING)
export const fetchSuccess = createAction(FETCH_SUCCESS, payload => payload)
export const fetchFail = createAction(FETCH_FAIL)

function* fetchMyGitHub() {
  yield put(fetchPending())
  try {
    const result = yield call(getMyGitHubProfile)

    yield put(fetchSuccess(result))
  } catch (error) {
    yield put(fetchFail())
  }
}

export const reducer = handleActions(
  {
    [FETCH_PENDING]: state => ({
      ...state,
      isLoading: true,
    }),
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      contents: action.payload,
    }),
    [FETCH_FAIL]: state => ({
      ...state,
      isLoading: false,
      contents: 'error',
    }),
  },
  initialState,
)

export function* sagas() {
  console.log('sgas')
  yield takeLatest(FETCH, fetchMyGitHub)
}
