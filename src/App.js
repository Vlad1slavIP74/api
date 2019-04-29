import React from 'react';

import {BrowserRouter as Router,Route } from 'react-router-dom';

import Fail from './components/Fail.jsx'
import Main from './components/Main.jsx'
import Success from './components/Success.jsx'
import Result from './components/Result.jsx'

function App() {
  return (
    <Router basename="/kassa">
      <div>
        <Route exact path ='/' component = {Main}/>
        <Route exact path ='/fail' component = {Fail}/>
        <Route exact path ='/success' component = {Success}/>
        <Route exact path ='/result' component = {Result}/>
      </div>
    </Router>
  );
}

export default App;
