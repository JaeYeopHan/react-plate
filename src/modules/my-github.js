import { handleActions } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects'

import { getMyGitHubProfile } from 'api'
import { createAsyncAction, createSaga } from 'utils/actionUtils'

export const TYPE = 'myGitHub'

const initialState = {
  isLoading: true,
  contents: 'contents',
  errorMessage: '',
}

const myGitHubAsync = createAsyncAction(TYPE)

const reducer = {
  [myGitHubAsync.PENDING]: state => ({
    ...state,
    isLoading: true,
  }),
  [myGitHubAsync.SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    contents: action.payload,
  }),
  [myGitHubAsync.FAIL]: state => ({
    ...state,
    isLoading: false,
    contents: 'error',
  }),
}

export const myGitHubReducer = handleActions(reducer, initialState)
export const myGitHubSaga = [takeLatest(myGitHubAsync.FETCH, createSaga(TYPE, getMyGitHubProfile))]
export const { fetch } = myGitHubAsync
