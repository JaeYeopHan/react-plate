import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as todo from 'modules/todo'

const TodoContainer = () => {
  const [input, setInput] = useState('')
  const items = useSelector(state => state.todo.items)
  const dispatch = useDispatch()

  const handleKeyPress = ({ target, which }) => {
    if (which === 13) {
      dispatch(todo.add(target.value))
      setInput('')
    }
  }
  const handleChangeInput = ({ target }) => {
    setInput(target.value)
  }

  return (
    <section>
      <h2>Todo Example</h2>
      <input type="text" value={input} onChange={handleChangeInput} onKeyPress={handleKeyPress} />
      <ul>
        {items.map((item, index) => (
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
