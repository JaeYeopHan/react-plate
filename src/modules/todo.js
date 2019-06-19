import { createAction, handleActions } from 'redux-actions'

const initialState = {
  items: [{ name: 'A', isDone: false }, { name: 'B', isDone: false }, { name: 'C', isDone: false }],
}

const NAMESPACE = 'todo'

const ADD = `${NAMESPACE}/ADD`

export const add = createAction(ADD, name => ({
  name,
  isDone: false,
}))

export default handleActions(
  {
    [ADD]: (state, action) => {
      const newItems = state.items.concat(action.payload)
      return {
        ...state,
        items: newItems,
      }
    },
  },
  initialState,
)
