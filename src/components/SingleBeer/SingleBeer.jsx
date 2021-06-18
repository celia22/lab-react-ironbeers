import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';

class SingleBeer extends Component {
constructor(props){
  super(props)
this.state = {
  singleBeer: "",
}
} 

 componentDidMount() {
    const { id }  = this.props.match.params;

    console.log(id) 
    console.log("params", this.props.match.params)
    axios.get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then(res => this.setState({ singleBeer: res.data }));
      console.log("beer", this.state.singleBeer)
  }
  
  render(){
  //   if (!this.state.singleBeer) {
  //     return(
  //         <p>loading...</p>
  //     )
  // }
    const { singleBeer } = this.state
    return(   
      <>
      <Header />

      <div className="beer_item">
        <img src={singleBeer.image_url} alt="beer" />
        <h3> {singleBeer.name}</h3>
        <h4>{singleBeer.tagline}</h4>
        <h4>{singleBeer.first_brewed}</h4>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.attenuation_level}</p>
        <h6>{singleBeer.contributed_by}</h6>
      </div>
      </>
    )      
  } 
}

export default SingleBeer;

