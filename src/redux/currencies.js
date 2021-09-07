import axios from 'axios';

const GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST';
const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
const GET_CURRENCY_FAILURE = 'GET_CURRENCY_FAILURE';

export const getCurrencyRequest = () => ({
    type: GET_CURRENCY_REQUEST,
  });
  
  export const getCurrencySuccess = (currency) => ({
    type: GET_CURRENCY_SUCCESS,
    payload: currency,
  });
  
  export const getCurrencyFailure = (error) => ({
    type: GET_ROCKET_FAILURE,
    payload: error,
  });
  
  export const fetchRockets = () => (dispatch) => {
    dispatch(getRocketRequest);
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then((response) => {
        const newData = response.data;
        const currency = newData.map((coin) => ({
          id: coin.id,
          symbol: coin.symbol,
          name: coin.name,
          image: coin.image,
          price: coin.current_price,
          marketCap: coin.market_cap,
          rank: coin.market_cap_rank,
          totalVolume: coin.total_volume,
          high: coin.high_24hr,
          low: coin.low_24hr,
        }));
        dispatch(getRocketSuccess(currency));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getRocketFailure(errorMsg));
      });
  };
  
  export const initialState = {
    loading: false,
    currency: [],
    error: '',
  };
  
  const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CURRENCY_REQUEST:
        return { ...state, loading: true };
  
      case GET_CURRENCY_SUCCESS:
        return {
          ...state,
          loading: true,
          currency: action.payload,
          error: '',
        };
  
      case GET_CURRENCY_FAILURE:
        return {
          loading: false,
          currency: [],
          error: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default currencyReducer;