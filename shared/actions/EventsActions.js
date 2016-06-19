import request from 'axios';

const BACKEND_URL = 'https://facebookeventsapi.herokuapp.com/events?access_token=1610597232561195|Zyz5nKRXOlEGGWZJQzc7nX_26cE&distance=20000&sort=venue';

export function getEvents(coordinates) {
  let { latitude, longitude } = coordinates;

  return {
    type: 'GET_EVENTS',
    promise: request.get(BACKEND_URL + "&lat=" + latitude + "&lng=" + longitude)
  }
}
