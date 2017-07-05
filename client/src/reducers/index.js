import { combineReducers } from 'redux';
import citiesReducer from './cities_reducer';
import selectedCityReducer from './selected_city_reducer';


const rootReducer =  combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer
});


export default rootReducer;
