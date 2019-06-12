import React, { createContext, useContext, useReducer, useMemo } from 'react'
import counterReducer, { counter } from './counter'
import todoReducer, { todo } from './todo'
import myGitHubReducer, { myGitHub } from './my-github'
import { info } from 'utils'

// Combine state
const globalState = {
  counter,
  todo,
  myGitHub,
}

// Combine reducer
const reducer = ({ counter, todo, myGitHub }, action) => {
  info(action)
  return {
    counter: counterReducer(counter, action),
    todo: todoReducer(todo, action),
    myGitHub: myGitHubReducer(myGitHub, action),
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

  if (!globalState[target]) {
    throw Error('Not found store module')
  }

  return [globalState[target], dispatch]
}
