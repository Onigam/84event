import * as EventsActions       from 'actions/EventsActions';
export function locationChanged(coordinates) {
  return {
    type: 'LOCATION_CHANGED',
    coordinates
  }
}
export function radiusStyleChanged(radiusStyle) {
  return {
    type: 'RADIUS_STYLE_CHANGED',
    radiusStyle
  }
}
