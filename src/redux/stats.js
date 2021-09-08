import axios from 'axios';

const HOMEPAGE_SUCCESS = 'HOMEPAGE_SUCCESS';
const GET_STATS_REQUEST = 'GET_STATS_REQUEST';
const STATPAGE_SUCCESS = 'STATPAGE_SUCCESS';

//   export const homePageSuccess = (item) => ({
//     type: HOMEPAGE_SUCCESS,
//     payload: item,
//   });

export const getStatRequest = () => ({
    type: GET_STATS_REQUEST,
  });

  export const statPageSuccess = (item) => ({
    type: STATPAGE_SUCCESS,
    payload: item,
  });

  export const fetchStats = (id) => (dispatch) => {
    dispatch(getCurrencyRequest);
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
            high: coin.high_24h,
            low: coin.low_24h,
          }));
        dispatch(getCurrencySuccess(currency));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getCurrencyFailure(errorMsg));
      });
  };
  
  export const initialState = {
    loading: false,
    error: '',
    stats: [],
  };
  
  const statsReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOMEPAGE_SUCCESS:
        return { ...state, home: true };

        case STATPAGE_SUCCESS:
            return { ...state, home: false, stats: action.payload };

      default:
        return state;
    }
  };
  
  export default statsReducer;