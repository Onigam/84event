import Immutable from 'immutable';
import moment from 'moment';
const defaultState = new Immutable.List();
export default function locationReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_EVENTS':
      return new Immutable.List().concat(action.res.data.events.sort((a,b) => {
          let aStart = moment(a.eventStarttime);
          let bStart = moment(b.eventStarttime);
          if (aStart > bStart) {
            return 1;
          }
          if (aStart < bStart) {
            return -1;
          }
          // a must be equal to b
          return 0;
      }));
    default:
      return state;
  }
}
