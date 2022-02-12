import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import message from "./message";

const App = () => { 
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Component />
          </Route>
        </Switch>
      </Router>
    );
  
}

export default App;
