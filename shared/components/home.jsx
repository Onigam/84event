import React                  from 'react';
import EventsView             from 'components/EventsView';
import EventsForm             from 'components/EventsForm';
import { bindActionCreators } from 'redux';
import * as EventsActions       from 'actions/EventsActions';
import { connect }            from 'react-redux';
import {green100, green500, green700} from 'material-ui/styles/colors';
import GoogleMap from 'google-map-react';
import {googleMapStyle, containerStyle} from './home_style.js';
import {cardStyle} from './common_style.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';


@connect(state => ({ events: state.events }))
export default class Home extends React.Component {
    static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  render() {
    const { events, dispatch, getEvents } = this.props;



     const _onClick = ({x, y, lat, lng, event}) => {
       dispatch(EventsActions.getEvents({latitude : lat, longitude : lng}));
     }

    return (
      <MuiThemeProvider>

      <div id="events-list" style={containerStyle}>

      <Card style={cardStyle}>
      <GoogleMap
        style={googleMapStyle}
        onClick={_onClick}
        bootstrapURLKeys={{
          key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
          language: 'fr'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
      </GoogleMap>
      </Card>
        <EventsForm
          {...bindActionCreators(EventsActions, dispatch)} />
        <EventsView events={events}
          {...bindActionCreators(EventsActions, dispatch)} />
      </div>
      </MuiThemeProvider>
    );
  }
}
