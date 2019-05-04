import React from 'react';

class Example extends React.Component {

  
handleSubmit=(event)=>{
  event.preventDefault();
  this.props.handleLogin(true);
}


    render() {
      return(
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
      Password:
        <input type="text" name="password" />
        </label>
      <input type="submit" value="Submit"/>
    </form> 
      );
    }
  }

export default Example;
