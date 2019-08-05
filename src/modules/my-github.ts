import { handleActions, Action } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects'
import { createAsyncAction, createSaga } from '@utils/actionUtils'
import { getMyGitHubProfile } from '@api/index'

interface IGitHubContents {
  login: string
  html_url: string
  blog: string
  avatar_url: string
}

export interface IMyGitHubState {
  contents: IGitHubContents
  errorMessage: string
}

export const TYPE = 'myGitHub'

const initialState: IMyGitHubState = {
  contents: {
    login: '',
    html_url: '',
    blog: '',
    avatar_url: '',
  },
  errorMessage: '',
}

const myGitHubAsync = createAsyncAction(TYPE)

const reducer = {
  [myGitHubAsync.SUCCESS]: (state: IMyGitHubState, action: Action<any>) => ({
    ...state,
    contents: action.payload,
  }),
  [myGitHubAsync.FAILURE]: (state: IMyGitHubState) => ({
    ...state,
    errorMessage: 'error',
  }),
}

export const myGitHubReducer = handleActions(reducer, initialState)
export const myGitHubSaga = [takeLatest(myGitHubAsync.FETCH, createSaga(TYPE, getMyGitHubProfile))]
export const { fetch } = myGitHubAsync
