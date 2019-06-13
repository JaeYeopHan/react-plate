import React, { useState } from 'react'
import { useStore } from 'modules'
import * as todo from 'modules/todo'
import { Item } from 'modules/todo'

const TodoContainer = () => {
  const [input, setInput] = useState('')
  const [state, dispatch] = useStore(todo.NAMESPACE)

  const handleKeyPress = ({ which }: React.KeyboardEvent) => {
    if (which === 13) {
      dispatch(todo.add(input))
      setInput('')
    }
  }
  const handleChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(target.value)
  }

  return (
    <section>
      <h2>Todo Example</h2>
      <input type="text" value={input} onChange={handleChangeInput} onKeyPress={handleKeyPress} />
      <ul>
        {state.items.map((item: Item, index: number) => (
          <li key={`todo-item-${index}`}>
            <input type="checkbox" />
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoContainer
