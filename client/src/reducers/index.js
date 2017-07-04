import { combineReducers } from 'redux';
import citiesReducer from './cats_reducer';


const rootReducer =  combineReducers({
  cities: citiesReducer
});


export default rootReducer;
