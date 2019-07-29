import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import App2 from './App2'





const routing=(
  <Router>
          <Route exact path='/' component={App} />
          <Route exact path='/1' component={App} />
          <Route exact path='/2' component={App2}/>
  </Router>
)

export default routing;
