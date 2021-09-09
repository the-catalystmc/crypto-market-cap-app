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


describe('Test if homepage/curencies is rendered.', () => {
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