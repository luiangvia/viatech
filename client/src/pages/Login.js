// import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
// import Route from 'react-router-dom/Route';

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Example from "../componentscontainer/component/Example";
import ShowDB from "../componentscontainer/component/ShowDB";
import './Login.css';
import Header from '../headercontainer/headercomponent/Header';
import Footer from '../footercontainer/footercomponent/Footer';



class Login extends Component {
  state = {
    loggedIn:false,    
  }
  loginHandle = () => {
    this.setState(prevState => ({
      // ! everytime you click it will change the state
      loggedIn: !prevState.loggedIn}));
  }
 
  handleLogin = (login) => {
    this.setState({ loggedin: login });
}
  
  render() {
    return (
      <div class="mainDiv">
      <Header/>
      
      <Example handleLogin={this.handleLogin} />
        {/* {this.state.loggedin ? <ShowDB /> : null} */}
        {this.state.loggedin ? <Redirect to='/main' /> : null}
     <Footer/>
      </div>
     
    )
  }
}

export default Login;