import Immutable from 'immutable';
const defaultState = Immutable.Map({lat: 59.938043, lng: 30.337157, radius: 2500});
export default function locationSearchReducer(state = defaultState, action) {
  switch(action.type) {
    case 'LOCATION_CHANGED':
      return Immutable.fromJS({ lat : action.coordinates.lat, lng : action.coordinates.lng, radius : state.get("radius"), radiusStyle: state.get("radiusStyle") });
    case 'RADIUS_CHANGED':
      return Immutable.fromJS({radius: action.radius, lat: state.get("lat"), lng: state.get("lng")});
    case 'RADIUS_STYLE_CHANGED':
      return Immutable.fromJS({radiusStyle: action.radiusStyle, radius: state.get("radius"), lat: state.get("lat"), lng: state.get("lng")});
    default:
      return state;
  }
}
