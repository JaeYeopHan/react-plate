import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation'
import { routeConfigs } from './routes'
import { GlobalProvider } from './modules'

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Plate</h1>
      </header>
      <BrowserRouter>
        <Navigation />
        <GlobalProvider>
          <Switch>
            {routeConfigs.map((config, index) => (
              <Route key={index} path={config.path} component={config.component} />
            ))}
          </Switch>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
