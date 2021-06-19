import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';



class RandomBeer extends Component {
  constructor(props){
    super(props)
  this.state = {
    randomBeer: "",
  }
  } 
  
   componentDidMount() {
    
       axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(res => this.setState({ randomBeer: res.data }));
    }
    
    render(){
      if (!this.state.randomBeer) {
        return(
            <p>loading...</p>
        )
    }
      const { randomBeer } = this.state
      return(   
        <>
        <Header />
  
        <div className="beer_item_single">
          <img src={randomBeer.image_url} alt="beer" />
          <div className="title">
            <h2> {randomBeer.name}</h2>
            <p><strong>{randomBeer.attenuation_level}</strong></p>
          </div>
          <div className="subtitle">
          <h4>{randomBeer.tagline}</h4>
          <h4>{randomBeer.first_brewed}</h4>
           </div>    
          <p>{randomBeer.description}</p>        
          <h5><strong>{randomBeer.contributed_by}</strong></h5>
        </div>
        </>
      )      
    } 
  }
  
  export default RandomBeer;
  
  