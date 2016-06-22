import * as EventsActions       from 'actions/EventsActions';
export function locationChanged(coordinates) {
  return {
    type: 'LOCATION_CHANGED',
    coordinates
  }
}
