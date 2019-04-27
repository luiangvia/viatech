import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './componentscontainer/component/Example';
import ShowDB from './componentscontainer/component/ShowDB';


class App extends Component {

  state = { loggedin: false }

  handleLogin = (login) => {
    this.setState({ loggedin: login });
  }

  render() {
    return (
      <div className='App'>
        <h1>
          {this.state.loggedin}
        </h1>
        <Example handleLogin={this.handleLogin} />
        {this.state.loggedin ? <ShowDB/> : null}
      </div>
    )
  }
}
export default App;




