import React from 'react';

export default class EventsView extends React.Component {
  render() {
    return (
      <div id="events-list">
        {
          this.props.events.map( (event, index) => {
            return (
              <div key={index}>
                <img src={event.coverPicture}>
                </img>
                <div>
                  {event.name}
                </div>
                <div>
                  {event.startTime}
                </div>
                <div>
                  {event.location}
                </div>
                <div>
                  {event.distance}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
