import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Currencies from './components/cryptos/Currencies';
import Stats from './components/Stats';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route path="/details/:id" component={Stats} />
        <Redirect from="/" to="/currencies" />
      </Switch>
    </Router>
  );
}

export default App;
