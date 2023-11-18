import { GET_WEATHER, GET_WEATHER_SUCCESS } from "./constants";

export const getWeather = payload => {
  return {
    type: GET_WEATHER,
    payload
  };
};

export const getWeatherSuccess = payload => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload
  };
};
