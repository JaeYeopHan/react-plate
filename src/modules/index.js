import React, { createContext, useContext, useReducer, useMemo } from 'react'
import counterReducer, { counter } from './counter'

const globalState = {
  counter,
}

const reducer = ({ counter }, action) => {
  return {
    counter: counterReducer(counter, action),
  }
}

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState)
  const value = useMemo(() => [state, dispatch], [state])

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export const useStore = target => {
  const [globalState, dispatch] = useContext(GlobalContext)

  return [globalState[target], dispatch]
}
