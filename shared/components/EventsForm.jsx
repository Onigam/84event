import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as LocationActions       from 'actions/LocationActions';
import {skewStyle} from './common_style.js';
import { connect }            from 'react-redux';

@connect()
export default class EventsForm extends React.Component {
  aroundMe = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
      this.props.dispatch(LocationActions.locationChanged({ lat: position.coords.latitude , lng: position.coords.longitude}));
    });
  }

  render() {
    return (
      <div id="events-form">
      <RaisedButton secondary={true} label="Get all events around me!" onClick={this.aroundMe} />
      </div>
    );
  }
}
