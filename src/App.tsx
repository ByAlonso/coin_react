import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Route, Switch, useLocation
} from "react-router-dom";
import InitPage from './InitPage/InitPage';
import Results from './Results/Results';
import Trackpad from './Trackpad/Trackpad';
import { Grid } from '@mui/material';

class App extends Component {
  currentCoin = "lb";
  state = {
    amount: 0
  };

  handleCallback = (amount: number) => {
    this.setState({ amount: amount });
  };

  render() {
    return (
      <Grid container className="defaultContainer">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <InitPage />
            </Route>
            <Route path="/trackpad" >
              <Trackpad parentCallback={this.handleCallback} currentCoin ={this.currentCoin}/>
            </Route>
            <Route path="/results" >
              <Results amount={this.state.amount} currentCoin ={this.currentCoin}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Grid>
    );
  }

}

export default App;
