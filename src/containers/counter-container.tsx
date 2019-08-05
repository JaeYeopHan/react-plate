import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as counter from '@modules/counter'
import { IRootState } from '@modules/index'

const CounterContainer = () => {
  const counterState = useSelector<IRootState, counter.ICounterState>(state => state.counter)
  const dispatch = useDispatch()
  const handleClickUp = useCallback(() => dispatch(counter.increase()), [dispatch])
  const handleClickDown = useCallback(() => dispatch(counter.decrease()), [dispatch])

  return (
    <div>
      <h2>Counter Example</h2>
      <div>{counterState.count}</div>
      <button onClick={handleClickUp}>up</button>
      <button onClick={handleClickDown}>down</button>
    </div>
  )
}

export default CounterContainer
