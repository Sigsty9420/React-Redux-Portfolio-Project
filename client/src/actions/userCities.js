import fetch from 'isomorphic-fetch';

export function saveUserCitySelection(selectedValue, username) {
  return (dispatch) => {
    dispatch({ type: 'USER_CITIES', citySelection: selectedValue });
    return fetch(`http://localhost:3001/users/${username}`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedValue)
      })
      .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then(userdetails => dispatch({ type: 'GET_USER_CITIES', userCities: userdetails.favourite_cities}));
  };
}

export function getUserCity(username) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(`http://localhost:3001/users/${username}`)
      .then(response => response.json())
      .then(userdetails => dispatch({ type: 'GET_USER_CITIES', userCities: userdetails.favourite_cities}));
  };
}
