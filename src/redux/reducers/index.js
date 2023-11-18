import { combineReducers } from "redux";
import countryReducer from "./country";
import weatherReducer from "./weather";

const rootReducer = combineReducers({
  country: countryReducer,
  weather: weatherReducer,
});

export default rootReducer;
