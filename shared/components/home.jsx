import React                  from 'react';
import EventsView             from 'components/EventsView';
import EventsForm             from 'components/EventsForm';
import { bindActionCreators } from 'redux';
import * as EventsActions       from 'actions/EventsActions';
import * as LocationActions       from 'actions/LocationActions';
import { connect }            from 'react-redux';
import {green100, green500, green700} from 'material-ui/styles/colors';
import GoogleMap from 'google-map-react';
import {googleMapStyle, containerStyle, blueStyle, greenStyle, yellowStyle, turquoiseStyle, pinkStyle} from './home_style.js';
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

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.locationSearch !== nextProps.locationSearch) {
      this.props.dispatch(EventsActions.getEvents({ lat: nextProps.locationSearch.get("lat"), lng: nextProps.locationSearch.get("lng")}));
    }
  }


  render() {
     const { events, locationSearch, dispatch, getEvents, subscribe } = this.props;


     const defaultLocation = {lat: 59.938043, lng: 30.337157};


     const _onClick = ({x, y, lat, lng, event}) => {
       dispatch(LocationActions.locationChanged({lat : lat, lng : lng}));
     }


    return (
      <MuiThemeProvider muiTheme={muiTheme}>

      <div id="containerStyle" style={containerStyle}>
      <h1>
        <span style={blueStyle}>84</span>
        <span style={turquoiseStyle}>events</span>
      </h1>

      <Card style={cardStyle}>
      <GoogleMap
        style={googleMapStyle}
        onClick={_onClick}
        bootstrapURLKeys={{
          key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
          language: 'fr'
        }}
        defaultCenter={defaultLocation}
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
