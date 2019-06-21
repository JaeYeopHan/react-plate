import { handleActions } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects'

import { getMyGitHubProfile } from 'api'
import { createAsyncAction, createSaga } from 'utils/actionUtils'

export const TYPE = 'myGitHub'

const initialState = {
  contents: 'contents',
  errorMessage: '',
}

const myGitHubAsync = createAsyncAction(TYPE)

const reducer = {
  [myGitHubAsync.SUCCESS]: (state, action) => ({
    ...state,
    contents: action.payload,
  }),
  [myGitHubAsync.FAIL]: state => ({
    ...state,
    contents: 'error',
  }),
}

export const myGitHubReducer = handleActions(reducer, initialState)
export const myGitHubSaga = [takeLatest(myGitHubAsync.FETCH, createSaga(TYPE, getMyGitHubProfile))]
export const { fetch } = myGitHubAsync
