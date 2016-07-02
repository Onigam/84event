import request from 'axios';

const BACKEND_URL = 'https://spoutiapi.herokuapp.com/events?distance=20000&sort=venue';

export function getEvents(coordinates) {
  return {
    type: 'GET_EVENTS',
    promise: request.get(BACKEND_URL + "&lat=" + coordinates.lat + "&lng=" + coordinates.lng)
  }
}
