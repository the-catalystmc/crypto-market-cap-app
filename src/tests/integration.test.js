 
import React from 'react';
import {
    BrowserRouter as Router,
  } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';
import Stat from '../components/Stat';

describe('Test Details component', () => {
    const currency = {
        rank: 1, 
        low: 10, 
        high: 50, 
        price: 40,
        marketCap: 1000,
        totalVolume: 500,
    };
    render(
      <Router>
        <Stat currency={currency} />
      </Router>,
    );
  
    test('Expect price 40 to be rendered', () => {
      expect(screen.getByText('$40')).toBeInTheDocument();
    });
  });

describe('Check if all components are rendered', () => {
  test('Renders NavBar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('2021')).toBeInTheDocument();
  });
  test('Renders section title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('CryptoCurrencies')).toBeInTheDocument();
  });
  test('Renders Page Title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('STATS BY CURRENCY')).toBeInTheDocument();
  });
});