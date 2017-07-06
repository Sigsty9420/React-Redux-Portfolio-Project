import fetch from 'isomorphic-fetch';

export function saveUserCitySelection(selectedValue, userEmail) {
  return (dispatch) => {
    dispatch({ type: 'USER_CITIES', citySelection: selectedValue });
    //do a post request to the database
  };
}

export function getUserCity(userEmail) {
  console.info('---action', userEmail);
  return (dispatch) => {
    //do a get request to the database
    dispatch({ type: 'GET_USER_CITIES', userCities: [{city: 'Berlin'},{city: 'Vegas'}] });

  };
}
