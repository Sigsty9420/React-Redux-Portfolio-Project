
export default function citiesReducer(state= {loading: false, cities: []}, action) {
  switch ( action.type ) {
    case 'LOADING_CITIES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CITIES':
      return {loading: false, cities: action.payload}
    default:
      return state;
  }
}
