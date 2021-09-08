import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Currencies from './components/cryptos/Currencies';
import Currency from './components/cryptos/Currency';
import Header from './components/Header';
import Stats from './components/Stats';
// import { fetchCurrency } from "./redux/currencies";

function App() {
  // const allCurrencies = useSelector((state) => state.currency.currency);
  // const currencyStatus = useSelector((state) => state.currency.loading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currencyStatus === false) {
  //     dispatch(fetchCurrency());
  //   }
  // }, []);

  // const routes = (currencies) => currencies.map((currency) => (
  // <Route 
  // key={currency.id} 
  // path={`/${currency.id}`}
  // render={() => }
  // >
  //   <Currency key={currency.id} currency={currency} /></Route>));

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
