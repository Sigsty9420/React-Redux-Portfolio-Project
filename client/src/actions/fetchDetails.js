import fetch from 'isomorphic-fetch';

export function fetchDetails(cityId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(`http://localhost:3001/cities/${cityId}`)
      .then(response => response.json())
      .then(details => dispatch({ type: 'FETCH_DETAILS', payload: details }));
  };
}
