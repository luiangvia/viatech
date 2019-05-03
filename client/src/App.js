import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Example from './componentscontainer/component/Example';
import ShowDB from './componentscontainer/component/ShowDB';
import Header from './headercontainer/headercomponent/Header';
import Footer from './footercontainer/footercomponent/Footer';
import Projectsearchbarcomponent from './projectcontainer/projectsearchbarcomponent/Projectsearchbar';
import Projectlist from './projectcontainer/projectlistcomponent/Projectlist';
import Runlist from './projectcontainer/runcontainer/runlist/Runlist';
import Addrun from './projectcontainer/runcontainer/addruncontainer/addruncomponent/Addrun';
import SummaryReagents from './projectcontainer/runcontainer/summaryReagentsComponent/SummaryReagents';
import AddRunForm from './projectcontainer/runcontainer/addruncontainer/addrunformcomponent/AddRunForm';
import Projectcategory from './projectcontainer/projectcategorycomponent/Projectcategory';

import LoadProjects from './AddLoadProjects/LoadProjects';
import AddProjectForm from './AddLoadProjects/AddProjectForm';



class App extends Component {

  state = { loggedin: false }
  handleLogin = (login) => {
    this.setState({ loggedin: login });
  }

  //

  
  render() {
    return (
      <div className='App'>
      <Header/>
    <Projectsearchbarcomponent/>

    <LoadProjects/>
    <AddProjectForm/>
    <Projectlist/>


    <Projectcategory/>
    <Addrun/>
    <AddRunForm/>
    <Runlist/>
    <SummaryReagents/>
    
        <h1>
          {this.state.loggedin}
        </h1>
        <Example handleLogin={this.handleLogin} />
        {this.state.loggedin ? <ShowDB/> : null}
        <Footer/>
      </div>
    )
  }
}
export default App;




