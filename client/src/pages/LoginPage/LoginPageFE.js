import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Logincomponent from "../../logincomponents/Logincomponent";
import './LoginPageFE.css';
import Header from '../../headercontainer/headercomponent/Header';
import Footer from '../../footercontainer/footercomponent/Footer';
//
class LoginPageFE extends Component {
  state = {
    loggedIn: false,
  }

  handleLogin = (login) => {
    this.setState({ loggedin: login });
  }

  render() {
    return (
      <div class="mainDiv">
        <Header/>
        <Logincomponent handleLogin={this.handleLogin} />
        {this.state.loggedin ? <Redirect to='/main' /> : null}
        <Footer />
      </div>

    )
  }
}

export default LoginPageFE;