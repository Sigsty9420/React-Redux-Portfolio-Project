
export default function citiesReducer(state= {loading: false, cities: []}, action) {
  switch ( action.type ) {
    case 'LOADING_CITIES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CITIES':
      return {loading: false, cities: action.payload}
    case 'USER_CITIES':
      return Object.assign({}, state, {citySelected: action.citySelection});
    case 'GET_USER_CITIES':
        return Object.assign({}, state, {userCities: action.userCities});
    default:
      return state;
  }
}
