import currencyReducer, {
    getCurrencyRequest,
    statPageSuccess,
  } from '../redux/currencies';
  
  test('test to return the initial state', () => {
    expect(currencyReducer(undefined, {})).toEqual({
        loading: false,
        currency: [],
        error: '',
        home: true,
        stats: [],
    });
  });
  
  test('test to change the loading boolean', () => {
    const initialState = {
        loading: false,
        currency: [],
        error: '',
        home: true,
        stats: [],
    };
    expect(currencyReducer(initialState, getCurrencyRequest())).toEqual({
        loading: true,
        currency: [],
        error: '',
        home: true,
        stats: [],
    });
  });
  
  test('should handle a boolean passed to initial state', () => {
    const payload = 'temp';
    const expectedAction = {
      type: 'STATPAGE_SUCCESS',
      payload,
    };
    expect(statPageSuccess(payload)).toEqual(expectedAction);
  });