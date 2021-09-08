import React, { useEffect } from 'react';
import logo from '../../assets/crypto.png';
import { useSelector, useDispatch } from 'react-redux';
import Currency from "./Currency";
import { fetchCurrency, statPageSuccess } from "../../redux/currencies";

function Currencies() {
  const allCurrencies = useSelector((state) => state.currency.currency);
  const currencyStatus = useSelector((state) => state.currency.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currencyStatus === false) {
      dispatch(fetchCurrency());
    }
    dispatch(statPageSuccess(false));
  }, []);

  const marketTotal = () => {
    let total = 0;
    for (let i = 0; i < allCurrencies.length; i++) {
      total += allCurrencies[i].marketCap;
    }
    return total;
  }

  return (
    <div>
      <div className="Header-Container">
        <div className="Header-Picture">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Header-Name">
          <h2>CryptoCurrencies</h2>
          <p>{marketTotal()} <br /> Market Capitalization</p>
        </div>
      </div>
      <div>
        <h3 className="Currency-Stats">STATS BY CURRENCY</h3>
        {currencyStatus}
        <ul className="Currencies">
          {allCurrencies.map((currency) => (
            <Currency key={currency.id} currency={currency} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Currencies;