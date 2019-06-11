import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Routes from 'routes'
import Navigation from 'components/navigation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Plate</h1>
      </header>
      <Router>
        <Navigation />
        <section>
          <Switch>
            {Routes.configs.map((config, index) => (
              <Route
                key={index}
                path={config.path}
                exact={config.exact}
                component={config.component}
              />
            ))}
          </Switch>
        </section>
      </Router>
    </div>
  )
}

export default App
