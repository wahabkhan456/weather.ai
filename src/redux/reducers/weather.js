import {  GET_WEATHER_SUCCESS } from "../actions/constants";

const initialState = {
  info: {},
  loading: false
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        info: payload
      };


    default:
      return state;
  }
};

export default weatherReducer;
