import React                  from 'react';
import EventsView             from 'components/EventsView';
import EventsForm             from 'components/EventsForm';
import { bindActionCreators } from 'redux';
import * as EventsActions       from 'actions/EventsActions';
import { connect }            from 'react-redux';
import GoogleMap from 'google-map-react';

@connect(state => ({ events: state.events }))
export default class Home extends React.Component {
    static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  render() {
    const { events, dispatch, getEvents } = this.props;

    const divStyle = {
      height: '300px'
    };

     const _onClick = ({x, y, lat, lng, event}) => {
       dispatch(EventsActions.getEvents({latitude : lat, longitude : lng}));
     }

    return (
      <div id="events-list">
      <div style={divStyle}>
      <GoogleMap
        onClick={_onClick}
        bootstrapURLKeys={{
          key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
          language: 'fr'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
      </GoogleMap>
      </div>
        <EventsForm
          {...bindActionCreators(EventsActions, dispatch)} />
        <EventsView events={events}
          {...bindActionCreators(EventsActions, dispatch)} />
      </div>
    );
  }
}
