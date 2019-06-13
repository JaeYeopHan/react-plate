// State
export interface ICounterState {
  count: number
}

export const counter = {
  count: 0,
}

export const NAMESPACE = 'counter'

// Action (NAMESPACE/ACTION_NAME)
const INCREASE = `${NAMESPACE}/INCREASE`
const DECREASE = `${NAMESPACE}/DECREASE`

// Action Creator
interface IncreaseActionType {
  type: typeof INCREASE
}

interface DecreaseActionType {
  type: typeof DECREASE
}

export type CounterActionType = IncreaseActionType | DecreaseActionType

export const increase = (): CounterActionType => ({
  type: INCREASE,
})

export const decrease = (): CounterActionType => ({
  type: DECREASE,
})

// Reducer
export default function(state: ICounterState, action: CounterActionType): ICounterState {
  const { count } = state

  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: count + 1,
      }
    case DECREASE:
      return {
        ...state,
        count: count - 1,
      }
    default:
      return state
  }
}
