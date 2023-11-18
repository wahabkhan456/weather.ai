import {call,put} from 'redux-saga/effects';
import { getWeatherService } from '../../services';
import { getWeatherSuccess } from '../actions/weather';

export function* getWeatherSaga(action){
    
    const {payload}=action;
    try{

        console.log("name",payload);
        
        const values=yield call(getWeatherService,payload);
        
        console.log('values',values);

        yield put(getWeatherSuccess(values))
        
    }
    catch(err){
        console.log("err",err);
    }

}

