import React, { createContext, useContext, useReducer, useMemo } from 'react'
import counterReducer, { counter, ICounterState } from './counter'
import todoReducer, { todo, ITodoState } from './todo'
import myGitHubReducer, { myGitHub, IMyGitHubState } from './my-github'
import { info } from 'utils'

interface IGlobalState {
  counter: ICounterState
  todo: ITodoState
  myGitHub: IMyGitHubState
}

// Combine state
const globalState: IGlobalState = {
  counter,
  todo,
  myGitHub,
}

// Combine reducer
const reducer = ({ counter, todo, myGitHub }: IGlobalState, action: any) => {
  info(action)
  return {
    counter: counterReducer(counter, action),
    todo: todoReducer(todo, action),
    myGitHub: myGitHubReducer(myGitHub, action),
  }
}

const defaultValue: any[] | never[] = []
const GlobalContext = createContext(defaultValue)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, globalState)
  const value = useMemo(() => [state, dispatch], [state])

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export const useStore = (target: string) => {
  const [globalState, dispatch] = useContext(GlobalContext)

  if (!globalState[target]) {
    throw Error('Not found store module')
  }

  return [globalState[target], dispatch]
}
