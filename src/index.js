import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routeConfigs } from 'routes'
import configureStore from 'modules'
import Navigation from 'components/navigation'

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
