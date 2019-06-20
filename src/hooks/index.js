import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function useAction(action) {
  const dispatch = useDispatch()

  return useCallback(() => dispatch(action()), [action, dispatch])
}

export function useValue(type) {
  return useSelector(state => state[type])
}
