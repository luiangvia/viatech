import React, { Component } from 'react'
//use props to render the project data from db
//project corresponds to name of project (state) in listpojects

//this is a CONTAINER
export default class Project extends Component {
  render() {
    return (
      <div>
        {this.props.project.name}
      </div>
    )
  }
}