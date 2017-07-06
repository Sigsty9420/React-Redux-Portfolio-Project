import fetch from 'isomorphic-fetch';

export function fetchFavourite() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('http://localhost:3001/cities/')
      .then(response => response.json())
      .then(cities => dispatch({ type: 'FETCH_FAVOURITE', payload: cities }));
  };
}
