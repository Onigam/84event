import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {skewStyle} from './common_style.js';

export default class EventsForm extends React.Component {
  getEvents = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
        this.props.getEvents(position.coords);
    });
  }



  render() {
    return (
      <div id="events-form">
      <RaisedButton secondary={true} label="Get all events around me!" onClick={this.getEvents} />
      </div>
    );
  }
}
