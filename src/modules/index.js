import React, { createContext, useContext, useReducer } from 'react'
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

export const GlobalProvider = ({ children }) => (
  <GlobalContext.Provider value={useReducer(reducer, globalState)}>
    {children}
  </GlobalContext.Provider>
)

export const useStore = () => useContext(GlobalContext)
