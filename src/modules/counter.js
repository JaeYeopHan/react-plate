// State
export const counter = {
  count: 0,
}

// Action (NAMESPACE/ACTION_NAME)
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// Action Creator
export const increaseCount = () => ({
  type: INCREASE,
})

export const decreaseCount = () => ({
  type: DECREASE,
})

// Reducer
export default function(state, action) {
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
