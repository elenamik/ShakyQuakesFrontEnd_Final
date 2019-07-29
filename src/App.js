import React, {useState} from 'react';
import './styles/App.css';
import Map from './components/locate/Map'
import QueryForm from './components/locate/QueryForm'
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/general/Header';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Locate from './components/locate'



function App() {
  const initialState={
    lat: {$numberDecimal: "-34"},
    long: {$numberDecimal: "150"}
  }

  let [data,setData]=useState([])

  function updateMap(db_data){
    setData(db_data)
    return data
  }

  return (
    <div className="App">
       <Header/>
      <Router>
        <div>
        <Route path='/locate' component={Locate}/>
        </div>
      </Router>
    </div>
  );
}

export default App;


//<QueryForm updateMap={updateMap}/>
//<Map data={data}/>

