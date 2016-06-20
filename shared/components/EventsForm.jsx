import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class EventsForm extends React.Component {
  getEvents = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
        this.props.getEvents(position.coords);
    });
  }

  render() {
    return (
      <div id="events-form">
      <RaisedButton label="Get all events around me!" onClick={this.getEvents} />
      </div>
    );
  }
}
