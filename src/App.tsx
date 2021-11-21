import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import InitPage from './InitPage/InitPage';
import Results from './Results/Results';
import Trackpad from './Trackpad/Trackpad';
import { AnimatePresence } from 'framer-motion';
import { Grid } from '@mui/material';

class App extends Component {

  state = {
    amount: 0
  }

  handleCallback = (amount: number) => {
    this.setState({ amount: amount });
  };

  render() {
    return (
      <Grid container className="defaultContainer">
        <BrowserRouter>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch>
              <Route exact path="/">
                <InitPage />
              </Route>
              <Route path="/trackpad" >
                <Trackpad parentCallback={this.handleCallback} />
              </Route>
              <Route path="/results" >
                <Results amount={this.state.amount} />
              </Route>
            </Switch>
          </AnimatePresence>
        </BrowserRouter>
      </Grid>
    );
  }

}

export default App;
