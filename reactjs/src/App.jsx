import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Message from "./message";

const App = () => { 
    return (
      <Router>
          <Route exact path="/">
            <Message />
          </Route>
      </Router>
    );
  
}

export default App;
