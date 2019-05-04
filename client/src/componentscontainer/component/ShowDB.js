import React, { Component } from 'react'

export default class ShowDB extends Component {
  render() {
    return (
      <div>
        <h1>showdb</h1>
      </div>
    )
  }
}


//type in rcc and hit enter to autofill

//to show database, need a lifecycle component/function (componentdidmount)
// componentdidmount runs before render (to be sure everything loads in) - requires use of axios or fetch
// ex. renderResults

/*
import React, { Component } from 'react'
import CraigslistAPI from '../CraigslistApi'
import { Card, Image } from 'semantic-ui-react'
 
export default class ResultsComponent extends Component {
  state = {
    listings: []
  }
  render() {
    return <Card.Group itemsPerRow={4}>{this.renderResults(this.state.listings)}</Card.Group>  //grabs from db
  }
 
  componentDidMount() {
    let client = new CraigslistAPI()
    let options = this.props.options
    client.getListings((listings) => this.setState({ listings: listings })) //can replace with fetch call
  }
 
  renderResults = (listings) => {   //takes in array of listings and maps
    return listings.map((listing) => {   //function looks at listing, gets all data and renders 'card' with information on it
      if (listing) {
        return (
          <Card key={listing.pid}>
            <Card.Content>
              <Card.Header>{listing.title}</Card.Header>
              <Card.Description>{listing.price}</Card.Description>
            </Card.Content>
          </Card>
        )
      }
    })
  }
}
*/