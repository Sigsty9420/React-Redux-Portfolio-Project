
export default function seclectedCityReducer(state= {loading: false, city: []}, action) {
  switch ( action.type ) {
    case 'LOADING_CITY':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_DETAILS':
      return {loading: false, city: action.payload}
    default:
      return state;
  }
}
