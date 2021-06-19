import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import AllBeers from './components/AllBeers/AllBeers';
import SingleBeer from './components/SingleBeer/SingleBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/beers">
            <AllBeers />
          </Route>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
