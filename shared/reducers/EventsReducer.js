import Immutable from 'immutable';
const defaultState = new Immutable.List();
export default function eventsReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_EVENTS':
    // TODO change to a async action to get the events
      return new Immutable.List().concat(action.res.data.events);
    default:
      return state;
  }
}
