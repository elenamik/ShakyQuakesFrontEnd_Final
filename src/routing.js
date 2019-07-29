import React from 'react';
import './styles/App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Locate from './components/locate'
import About from './components/about'
import Enroll from './components/enroll'
import Predictions from './components/predictions'
import Header from './components/general/Header'
import Footer from './components/general/Footer'




const routing=(
  <Router>
    <Header/>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/enroll' component={Enroll}/>
          <Route exact path='/predictions' component={Predictions}/>
          <Route exact path='/locate' component={Locate}/>
    <Footer/>
  </Router>
)

export default routing;


//<QueryForm updateMap={updateMap}/>
//<Map data={data}/>

