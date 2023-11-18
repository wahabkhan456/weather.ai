import {takeLatest, all} from 'redux-saga/effects';
import {getCountrySaga, getCountriesSaga, chooseCountrySaga} from '../sagas/countrySaga';
import { GET_COUNTRIES,CHOOSE_COUNTRY, GET_WEATHER } from '../actions/constants';
import { getWeatherSaga } from './weatherSaga';


export default function* rootSaga(){

    yield all([
        takeLatest(GET_COUNTRIES,getCountriesSaga),
        takeLatest(CHOOSE_COUNTRY,chooseCountrySaga),
        takeLatest(GET_WEATHER,getWeatherSaga),
    ])


}