import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
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
        <Route path="/stats">
          <Stats />
        </Route>
        <Redirect from="/" to="/currencies" />
      </Switch>
    </Router>
  );
}

export default App;
