import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class AddProject extends Component {

   loadProjects=(event)=>{
        event.preventDefault();
      }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.loadProjects}>ListProjects</Button>
      </div>
    )
  }
}
