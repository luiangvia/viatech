import React from 'react';
import './Example.css';
import logo from './viatechlogo.png'

class Example extends React.Component {
  state = {
    loggedIn: false,
  }
  loginHandle = () => {
    this.setState(prevState => ({
      // ! everytime you click it will change the state
      loggedIn: !prevState.loggedIn
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleLogin(true);
  }
  handleLogin = (login) => {
    this.setState({ loggedin: login });
  }

  render() {
    return (
      <div class="logindiv">
        <img class="logoimage"src={logo} alt="Logo" />
      <form onSubmit={this.handleSubmit}>
        <label class="username">
          Username: 
        </label>
        <input class="usernamebox" type="text" name="name" />
        <br />
        <label class="password">
          Password:
        </label>
        <input class="passwordbox" type="text" name="password" />

        <br />
        <input class="searchprojectbtn" type="submit" value="Login" />
        <br />
        {/* <input type="button" value={this.state.loggedIn ? 'Log Out' : 'Log In'} onClick={this.loginHandle.bind(this)} /> */}

      </form> 

      </div>
            );
  }
}

export default Example;