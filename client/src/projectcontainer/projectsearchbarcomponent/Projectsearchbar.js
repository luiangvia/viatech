import React, { Component } from 'react';
import "./Projectsearchbar.css";

export default class Projectsearchbarcomponent extends Component {
  render() {
    return (
      <div>
        <form id="projectheaderform">
            Search for Project Number:
            <input id="projectsearchinput" type="text" name="project#"/>
        </form>
        <button className="button" id="searchforprojectbtn" type="submit">Search</button>
      </div>
    )
  }
}
