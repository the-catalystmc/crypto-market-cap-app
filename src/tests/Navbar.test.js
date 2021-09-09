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


describe('Check if the Navbar is rendered', () => {
test('Renders date', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  test('renders title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Top 10 CryptoCurrencies')).toBeInTheDocument();
  });
});