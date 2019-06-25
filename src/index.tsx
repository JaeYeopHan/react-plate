import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from './modules'
import { routeConfigs, IRouterConfig } from './routes'
import Navigation from './components/navigation'

const sagaMiddleware = createSagaMiddleware()
const middlewares = []

middlewares.push(sagaMiddleware)

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

function Entry() {
  return (
    <div className="container">
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
          <Switch>
            {routeConfigs.map((config: IRouterConfig, index: number) => (
              <Route key={index} path={config.path} component={config.component} />
            ))}
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Entry />, document.getElementById('root'))
