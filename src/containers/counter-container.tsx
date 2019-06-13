import React from 'react'
import { useStore } from '../modules'
import * as counter from '../modules/counter'

const CounterContainer = () => {
  const [state, dispatch] = useStore(counter.NAMESPACE)

  const handleClickUp = () => dispatch(counter.increase())
  const handleClickDown = () => dispatch(counter.decrease())

  return (
    <div>
      <h2>Counter Example</h2>
      <div>{state.count}</div>
      <button onClick={handleClickUp}>up</button>
      <button onClick={handleClickDown}>down</button>
    </div>
  )
}

export default CounterContainer
