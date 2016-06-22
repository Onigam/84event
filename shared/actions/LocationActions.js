import * as EventsActions       from 'actions/EventsActions';
export function locationChanged(coordinates) {

  EventsActions.getEvents({latitude : lat, longitude : lng})
  return {
    type: 'LOCATION_CHANGED',
    coordinates
  }
}
