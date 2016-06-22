import Immutable from 'immutable';
const defaultState = Immutable.Map({lat: 59.938043, lng: 30.337157, radius: 2500});
export default function locationSearchReducer(state = defaultState, action) {
  switch(action.type) {
    case 'LOCATION_CHANGED':
      return state.merge(action.coordinates);
    case 'RADIUS_CHANGED':
      return state.merge(action.coordinates);
    default:
      return state;
  }
}
