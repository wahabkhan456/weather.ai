import {call,put} from 'redux-saga/effects';
import { getCountryService } from '../../services';
import { getCountriesSuccess, chooseCountrySuccess } from '../actions/country';

export function* getCountriesSaga(action){
    
    const {payload}=action;
    try{

        console.log("name",payload);
        
        const values=yield call(getCountryService,payload);
        
        console.log('values',values);

        yield put(getCountriesSuccess(values))
        
    }
    catch(err){
        console.log("err",err);
    }

}

export function* chooseCountrySaga(action){
    
    const {payload}=action;
    try{

        console.log("name",payload);

        yield put(chooseCountrySuccess(payload))
        
    }
    catch(err){
        console.log("err",err);
    }

}

