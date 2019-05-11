import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.js";
import Main from "./pages/Main.js";


function App() {
  return (
    <Router>
      <div>
        <Switch>
         <Route exact path="/main" component={Main}/>
         <Route exact path="/" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;