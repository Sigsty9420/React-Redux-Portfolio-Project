export function fetchCities() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CITIES_REQUEST' });
    return fetch('http://localhost:3001/cities/')
      .then(response => response.json())
      .then(cities => dispatch({ type: 'ADD_CITIES', cities }));
  };
}
