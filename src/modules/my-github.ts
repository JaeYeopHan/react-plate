// state
export interface IMyGitHubState {
  isLoading: boolean
  contents: any
  errorMessage: string
}

export const myGitHub = {
  isLoading: true,
  contents: 'contents',
  errorMessage: '',
}

export const NAMESPACE = 'myGitHub'

// Action (NAMESPACE/ACTION_NAME)
const FETCH = `${NAMESPACE}/FETCH`
const FETCH_SUCCESS = `${NAMESPACE}/FETCH_SUCCESS`
const FETCH_FAIL = `${NAMESPACE}/FETCH_FAIL`

// Action Creator
interface FetchActionType {
  type: typeof FETCH
}

interface FetchSuccessActionType {
  type: typeof FETCH_SUCCESS
  payload: any
}

interface FetchFailActionType {
  type: typeof FETCH_FAIL
}

export type MyGitHubActionType = FetchActionType | FetchFailActionType | FetchSuccessActionType

export const fetch = (): MyGitHubActionType => ({
  type: FETCH,
})

export const fetchSuccess = (payload: any): MyGitHubActionType => ({
  type: FETCH_SUCCESS,
  payload,
})

export const fetchFail = (): MyGitHubActionType => ({
  type: FETCH_FAIL,
})

export default function(state: IMyGitHubState, action: MyGitHubActionType): IMyGitHubState {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contents: (action as FetchSuccessActionType).payload,
      }
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        contents: 'error',
      }
    default:
      return state
  }
}
