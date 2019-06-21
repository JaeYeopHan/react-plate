import { createAction, handleActions } from 'redux-actions'

const initialState = {
  items: [{ name: 'A', isDone: false }, { name: 'B', isDone: false }, { name: 'C', isDone: false }],
}

const TYPE = 'todo'

const ADD = `${TYPE}/ADD`

const reducer = {
  [ADD]: (state, action) => {
    const newItems = state.items.concat(action.payload)
    return {
      ...state,
      items: newItems,
    }
  },
}

export const add = createAction(ADD, name => ({
  name,
  isDone: false,
}))

export const todoReducer = handleActions(reducer, initialState)
