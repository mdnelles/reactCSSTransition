import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import { Trans1 } from './components/Trans1'
import { Trans2 } from './components/Trans2'
import { Trans3 } from './components/Trans3'

function App() {
 
  return (
      <div className="App">
        next up is the router
        <Router>
            <Route exact path="/" component={Trans1} />
            <Route exact path="/trans1" component={Trans1} />
            <Route exact path="/trans2" component={Trans2} />
            <Route exact path="/trans3" component={Trans3} />
        </Router>
      </div>
  )
}

export default App;
