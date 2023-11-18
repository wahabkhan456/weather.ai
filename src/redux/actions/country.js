import { GET_COUNTRIES,GET_COUNTRIES_SUCCESS,CHOOSE_COUNTRY,CHOOSE_COUNTRY_SUCCESS } from "./constants";

export const getCountries = (payload) => {

    return{
  type: GET_COUNTRIES,
  payload
}};

export const getCountriesSuccess = (payload) => {

    return{
  type: GET_COUNTRIES_SUCCESS,
  payload
}};
export const chooseCountry = (payload) => {
    console.log("chooseCountry",payload)
    return{
  type: CHOOSE_COUNTRY,
  payload
}};
export const chooseCountrySuccess = (payload) => {

    return{
  type: CHOOSE_COUNTRY_SUCCESS,
  payload
}};
