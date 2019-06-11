// State
export const counter = {
  count: 0,
}

export const NAMESPACE = 'counter'

// Action (NAMESPACE/ACTION_NAME)
const INCREASE = `${NAMESPACE}/INCREASE`
const DECREASE = `${NAMESPACE}/DECREASE`

// Action Creator
export const increase = () => ({
  type: INCREASE,
})

export const decrease = () => ({
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
