import React from 'react'
import { useStore } from 'modules'
import * as actions from 'modules/counter'

const CounterContainer = () => {
  const [{ counter }, dispatch] = useStore()

  const handleClickUp = () => dispatch(actions.increaseCount())
  const handleClickDown = () => dispatch(actions.decreaseCount())

  return (
    <div>
      <h2>Counter Example</h2>
      <div>{counter.count}</div>
      <button onClick={handleClickUp}>up</button>
      <button onClick={handleClickDown}>down</button>
    </div>
  )
}

export default CounterContainer
