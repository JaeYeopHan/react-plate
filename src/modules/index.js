import { createStore, compose } from 'redux'
import { combineReducers } from 'redux'
import counter from './counter'
import myGitHub from './my-github'
import todo from './todo'

const reducers = combineReducers({
  counter,
  myGitHub,
  todo,
})

const reduxDevTools = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__

const composeMiddlewares = (() => {
  const middlewares = []
  if (reduxDevTools) middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  return middlewares
})()

// Add a middleware
const enhancer = compose.apply(null, composeMiddlewares)

export default function configureStore() {
  const store = ((initialState = {}) => ({
    ...createStore(reducers, initialState, enhancer),
  }))()

  return store
}
