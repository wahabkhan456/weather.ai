import { GET_COUNTRIES, GET_COUNTRIES_SUCCESS, CHOOSE_COUNTRY_SUCCESS } from "../actions/constants";

const initialState = {
  country: {},
  countries: [],
  loading: false
};

const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload
      };
    case CHOOSE_COUNTRY_SUCCESS:
      return {
        ...state,
        country: payload
      };

    default:
      return state;
  }
};

export default countryReducer;
