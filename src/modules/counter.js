import { createAction, handleActions } from 'redux-actions'

const initialState = {
  count: 0,
}

const NAMESPACE = 'counter'

const INCREASE = `${NAMESPACE}/INCREASE`
const DECREASE = `${NAMESPACE}/DECREASE`

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

export default handleActions(
  {
    [INCREASE]: state => ({
      ...state,
      count: state.count + 1,
    }),
    [DECREASE]: state => ({
      ...state,
      count: state.count - 1,
    }),
  },
  initialState,
)
