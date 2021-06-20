import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import "./AllBeers.css"

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        beers: [],
        status: "loading",
        query: ""
    }
}

componentDidMount() {
  axios.get("https://ih-beers-api2.herokuapp.com/beers")
  .then(response => {
      this.setState({
        beers: response.data,
        status: "loaded"
      })
  })
}

handleQuery = (query) => {

  axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
  .then((response) => {
      this.setState({
          beers: response.data,
      })
  })
  .catch((error) => {
      console.log('error', error)
  })
}



handleChange = (x) => {
this.setState({ query: x.target.value });  
this.props.search(x.target.value)
}

  render(){
   
    const {beers} = this.state

    // if (beers.status !== "loaded" ) {
    //   return(
    //       <p>loading...</p>
    //   )
    // }

    return(
      <>
      < Header />
      <input className="search_bar" type="text" label="search" placeholder="Search your beer..." value={this.state.query} onChange={this.handleChange}/>
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