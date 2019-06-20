import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import { counterReducer } from './counter'
import { myGitHubReducer, myGitHubSaga } from './my-github'
import { todoReducer } from './todo'

export const rootReducer = combineReducers({
  counter: counterReducer,
  myGitHub: myGitHubReducer,
  todo: todoReducer,
})

export function* rootSaga() {
  yield all([...myGitHubSaga])
}
