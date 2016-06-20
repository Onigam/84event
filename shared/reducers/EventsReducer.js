import Immutable from 'immutable';
const defaultState = new Immutable.List();
export default function eventsReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_EVENTS':
      return new Immutable.List().concat(action.res.data.events);
    default:
      return state;
  }
}
