import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import "./SingleBeer.css"
class SingleBeer extends Component {
constructor(props){
  super(props)
this.state = {
  singleBeer: "",
}
} 

 componentDidMount() {
    const id = this.props.match.params;
    console.log("id", id.id) 
     axios.get("https://ih-beers-api2.herokuapp.com/beers/" + id.id)
      .then(res => this.setState({ singleBeer: res.data }));
  }
  
  render(){
    if (!this.state.singleBeer) {
      return(
          <p>loading...</p>
      )
  }
    const { singleBeer } = this.state
    return(   
      <>
      <Header />

      <div className="beer_item">
        <img src={singleBeer.image_url} alt="beer" />
        <div className="title">
          <h2> {singleBeer.name}</h2>
          <p><strong>{singleBeer.attenuation_level}</strong></p>
        </div>
        <div className="subtitle">
        <h4>{singleBeer.tagline}</h4>
        <h4>{singleBeer.first_brewed}</h4>
         </div>    
        <p>{singleBeer.description}</p>        
        <h5><strong>{singleBeer.contributed_by}</strong></h5>
      </div>
      </>
    )      
  } 
}

export default SingleBeer;

