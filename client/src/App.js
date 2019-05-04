import React, { Component } from 'react';
import logo from './logo.svg';
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
import Imageupload from './reagantcontainer/draganddropcomponent/Imageupload';
import Fileupload from './reagantcontainer/draganddropcomponent/Fileupload';
import Addimagebutton from './reagantcontainer/addimagebuttoncomponent/Addimagebutton';
import Lotnumber from './reagantcontainer/lotnumbercomponent/Lotnumber';
import Reagantname from './reagantcontainer/reagantnamecomponent/Reagantname';


class App extends Component {

  state = { loggedin: false }

  handleLogin = (login) => {
    this.setState({ loggedin: login });
  }

  componentDidMount() {
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));

  }

  addFile = file => {
    console.log(file);
    this.setState({
      files: file.map(file => 
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
        )
    });
  };

  
  render() {
    return (
      <div className='App'>
      <Header/>
    <Projectsearchbarcomponent/>
    <Projectlist/>
    <Projectcategory/>
    <Addrun/>
    <AddRunForm/>
    <Runlist/>
    <Reagantname/>
    <Lotnumber/>
    <Imageupload addFile={this.addFile} files={this.state.files}/>
    <Fileupload addFile={this.addFile} files={this.state.files}/>
    <Addimagebutton/>
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




