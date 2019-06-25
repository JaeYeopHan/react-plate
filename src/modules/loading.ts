import { createAction, handleActions, Action } from 'redux-actions'

export interface ILoadingState {
  [key: string]: boolean
}

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

export const startLoading = createAction(START_LOADING)
export const finishLoading = createAction(FINISH_LOADING)

const initialState = {}

const reducer = {
  [START_LOADING]: (state: ILoadingState, action: Action<string>) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state: ILoadingState, action: Action<string>) => ({
    ...state,
    [action.payload]: false,
  }),
}

export const loadingReducer = handleActions(reducer, initialState)
