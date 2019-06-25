import { createAction, handleActions, Action } from 'redux-actions'

export interface IItem {
  name: string
  isDone: boolean
}

export interface ITodoState {
  items: IItem[]
}

const initialState: ITodoState = {
  items: [{ name: 'A', isDone: false }, { name: 'B', isDone: false }, { name: 'C', isDone: false }],
}

const TYPE = 'todo'

const ADD = `${TYPE}/ADD`

const reducer = {
  [ADD]: (state: ITodoState, action: Action<IItem>) => {
    const newItems = state.items.concat(action.payload)
    return {
      ...state,
      items: newItems,
    }
  },
}

export const add = createAction(ADD, (name: string) => ({
  name,
  isDone: false,
}))

export const todoReducer = handleActions(reducer, initialState)
