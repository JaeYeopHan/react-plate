// State
export interface Item {
  name: string
  isDone: boolean
}

export interface ITodoState {
  items: Item[]
}

export const todo = {
  items: [{ name: 'A', isDone: false }, { name: 'B', isDone: false }, { name: 'C', isDone: false }],
}

export const NAMESPACE = 'todo'

// Action (NAMESPACE/ACTION_NAME)
const ADD = `${NAMESPACE}/ADD`

// Action Creator
interface AddActionType {
  type: typeof ADD
  item: Item
}

export type TodoActionTypes = AddActionType

export const add = (name: string): TodoActionTypes => ({
  type: ADD,
  item: { name, isDone: false },
})

export default function(state: ITodoState, action: TodoActionTypes): ITodoState {
  const { items } = state

  switch (action.type) {
    case ADD:
      const newItems = items.concat(action.item)
      return {
        ...state,
        items: newItems,
      }
    default:
      return state
  }
}
