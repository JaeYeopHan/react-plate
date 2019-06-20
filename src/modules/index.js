import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import counter from './counter'
import * as myGitHub from './my-github'
import todo from './todo'

export const rootReducer = combineReducers({
  counter,
  myGitHub: myGitHub.reducer,
  todo,
})

export function* rootSaga() {
  yield all([myGitHub.sagas()])
}
