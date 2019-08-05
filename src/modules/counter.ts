import { createAction, handleActions } from 'redux-actions'

export interface ICounterState {
  count: number
}

const initialState: ICounterState = {
  count: 0,
}

const TYPE = 'counter'

const INCREASE = `${TYPE}/INCREASE`
const DECREASE = `${TYPE}/DECREASE`

const reducer = {
  [INCREASE]: (state: ICounterState) => ({
    ...state,
    count: state.count + 1,
  }),
  [DECREASE]: (state: ICounterState) => ({
    ...state,
    count: state.count - 1,
  }),
}

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

export const counterReducer = handleActions(reducer, initialState)
