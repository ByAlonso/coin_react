import React from 'react';
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

function App() {
  return (
    <Grid container className="defaultContainer">
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>
            <Route exact path="/" component={InitPage} />
            <Route path="/trackpad" component={Trackpad} />
            <Route path="/results" component={Results} />
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
