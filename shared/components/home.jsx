import React                  from 'react';
import EventsView             from 'components/EventsView';
import EventsForm             from 'components/EventsForm';
import { bindActionCreators } from 'redux';
import * as EventsActions       from 'actions/EventsActions';
import * as LocationActions       from 'actions/LocationActions';
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

const muiTheme = getMuiTheme({
  cardTitle: {
    textColor: "white"
  }
});

@connect(state => ({ events: state.events, locationSearch: state.locationSearch }))
export default class Home extends React.Component {
    static defaultProps = {
    zoom: 9
  };

  render() {
     const { events, locationSearch, dispatch, getEvents, subscribe } = this.props;

     subscribe(function(nextProp) {
             debbuger;
             // EventsActions.getEvents(coordinates);
     });

     const _onClick = ({x, y, lat, lng, event}) => {
       dispatch(LocationActions.locationChanged({lat : lat, lng : lng}));
     }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>

      <div id="containerStyle" style={containerStyle}>
      <h1>84events</h1>
      <Card style={cardStyle}>
      <GoogleMap
        style={googleMapStyle}
        onClick={_onClick}
        bootstrapURLKeys={{
          key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
          language: 'fr'
        }}
        defaultCenter={{lat: 59.938043, lng: 30.337157}}
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
