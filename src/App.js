import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

import HomePage from './components/HomePage/HomePage';
import AllBeers from './components/AllBeers/AllBeers';
import SingleBeer from './components/SingleBeer/SingleBeer';

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
      <>
        <Router>
          <Switch>
            <Route exact path="/beers/:beerId" component={SingleBeer} />
            <Route path="/beers">
              <AllBeers />
            </Route>
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
