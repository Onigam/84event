import React from 'react';

export default class EventsView extends React.Component {
  render() {
      return (
            <div>
              <img src={event.eventCoverPicture}>
              </img>
              <div>
                {event.eventName}
              </div>
              <div>
                {event.eventDescription}
              </div>
              <div>
                {event.eventStarttime}
              </div>
              <div>
                {event.venueLocation.city}
                {event.venueLocation.street}
                {event.venueLocation.zip}
              </div>
              <div>
                {event.eventDistance}
              </div>
            </div>
          );
  }
}
