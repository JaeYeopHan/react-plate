export const initialState = {
  isLoading: true,
  contents: 'contents',
  errorMessage: '',
}

export const NAMESPACE = 'myGitHub'

const FETCH = `${NAMESPACE}/FETCH`
const FETCH_SUCCESS = `${NAMESPACE}/FETCH_SUCCESS`
const FETCH_FAIL = `${NAMESPACE}/FETCH_FAIL`

export const fetch = () => ({
  type: FETCH,
})

export const fetchSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload,
})

export const fetchFail = () => ({
  type: FETCH_FAIL,
})

export default function(state = initialState, action) {
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
        contents: action.payload,
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
