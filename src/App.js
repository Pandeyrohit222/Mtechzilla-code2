import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import React from 'react';
import './App.css';
import  Register from './Register';

import Login from './Login';
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route path="/timer">
            <Timer/>
          </Route>
        <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>

          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
