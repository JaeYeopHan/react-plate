import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { routeConfigs } from 'routes'
import { rootReducer, rootSaga } from 'modules'
import Navigation from 'components/navigation'

const sagaMiddleware = createSagaMiddleware()

const reduxDevTools = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__

const composeMiddlewares = (() => {
  const middlewares = [applyMiddleware(sagaMiddleware)]
  if (reduxDevTools) middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  return middlewares
})()

const enhancer = compose.apply(null, composeMiddlewares)

function configureStore() {
  const store = ((initialState = {}) => ({
    ...createStore(rootReducer, initialState, enhancer),
  }))()

  sagaMiddleware.run(rootSaga)

  return store
}

const store = configureStore()

function Entry() {
  return (
    <div className="container">
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
          <Switch>
            {routeConfigs.map((config, index) => (
              <Route key={index} path={config.path} component={config.component} />
            ))}
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Entry />, document.getElementById('root'))
