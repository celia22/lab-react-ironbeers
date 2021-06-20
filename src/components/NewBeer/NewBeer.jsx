import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import "./NewBeer.css"

class NewBeer extends Component {

  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  }
  
  handleSubmit = () => {
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    axios({
      method: 'post',
      url: '/https://ih-beers-api2.herokuapp.com/beers/new',
      data: {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: first_brewed,
        brewers_tips:  brewers_tips,
        attenuation_level: attenuation_level,
        contributed_by : contributed_by,
      }
    });
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render(){
    return(
      <>
      < Header />
      <div>
      <form className="new_beer_form">
          <label><strong>Name</strong></label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

          <label><strong>Tagline</strong></label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />

          <label><strong>Description</strong></label>
          <input className="new_beer_description" type="text" name="description" value={this.state.description} onChange={this.handleChange} />

          <label><strong>First Brewed</strong></label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />

          <label><strong>Brewers Tips</strong></label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />
 
          <label><strong>Attenuation Level</strong></label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />
          
          <label><strong>Contributed By</strong></label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />
          
          <button className="submit_button" onSubmit={this.handleSubmit}> ADD NEW</button>
        </form>
      </div>
      
      </>
    )
  }

}

export default NewBeer