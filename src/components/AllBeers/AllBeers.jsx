import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import "./AllBeers.css"

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        beers: [],
        singleBeer: ""
    }
}

componentDidMount() {
  axios.get("https://ih-beers-api2.herokuapp.com/beers")
  .then(response => {
      this.setState({beers: response.data})
  })
}

chooseSingleBeer = () => {
  this.setState = {
    singleBeer: this.beers.item
  }
}

  render(){
    const {beers} = this.state

    if (!beers) {
      return(
          <h1>loading...</h1>
      )
  }
    return(
      <>
      < Header />
      <div className="beers_container">
        {beers.map((item,index) => {
          return(
            <div className="beer_item" key={index}>
              <img src={item.image_url} alt="beer" />
              <a href={`/beers/:${item._id}`}><h3> {item.name}</h3></a>
              <h4>{item.tagline}</h4>
              <h6><strong>Created by: </strong>{item.contributed_by}</h6>
            </div>
          )

        })}         
      </div>  
      </>
    )
  }
}

export default AllBeers



// image
// name
// tagline
// contributed_by
// Also, add the link to check the details of each beer. The link should navigate to /beers/:beerId.