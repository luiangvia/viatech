import React, { Component } from 'react'
//use props to render the project data from db
//project corresponds to name of project (state) in listpojects
export default class Project extends Component {
  render() {
    return (
      <div>
        {this.props.project.project_name}
      </div>
    )
  }
}
