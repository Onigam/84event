import React                  from 'react';
import EventsView             from 'components/EventsView';
import EventsForm             from 'components/EventsForm';
import SearchRadius           from 'components/map/SearchRadius';
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
import distance from 'gps-distance';

const muiTheme = getMuiTheme({
  cardTitle: {
    textColor: "white"
  }
});

@connect(state => ({ events: state.events, locationSearch: state.locationSearch }))
export default class Home extends React.Component {
    static defaultProps = {
    zoom: 12
    };

  componentWillReceiveProps(nextProps) {
    if (nextProps.locationSearch && this.props.locationSearch !== nextProps.locationSearch) {
      if (nextProps.locationSearch.has("lat") && nextProps.locationSearch.has("lng")) {
        const newLocation = { lat: nextProps.locationSearch.get("lat"), lng: nextProps.locationSearch.get("lng")};
        console.log("newLocation:"+ newLocation.lat + " - " + newLocation.lng);
        this.props.dispatch(EventsActions.getEvents(newLocation));
      }
    }
  }


  render() {
     const { events, locationSearch, dispatch, getEvents, subscribe } = this.props;
     let radiusLocation = locationSearch && locationSearch.has("lat") ? {lat: locationSearch.get("lat") , lng: locationSearch.get("lng")} : {lat: 59.938043, lng: 30.337157};

     const _onClick = ({x, y, lat, lng, event}) => {
       dispatch(LocationActions.locationChanged({lat : lat, lng : lng}));
     }

     const _onChange = (props) => {
       let diagoInKm = distance(props.bounds.nw.lat, props.bounds.nw.lng, props.bounds.se.lat, props.bounds.se.lng);
       let diagoInPx = Math.sqrt(Math.pow(props.size.height,2),Math.pow(props.size.width,2));
       let radiusInM = locationSearch.get("radius");
       let radiusInPx = Math.round((radiusInM*diagoInPx) / (diagoInKm*1000));
       dispatch(LocationActions.radiusStyleChanged({
         width: radiusInPx,
         height: radiusInPx,
         left: -radiusInPx/2,
         top: -radiusInPx/2,
         position: 'absolute',
         border: '3px solid rgb(0, 188, 212)',
         boxSizing: 'border-box',
         borderRadius: 300,
         backgroundColor: 'rgba(0, 188, 212, 0.6)',
         textAlign: 'center'
       }));
      }

      let radiusStyle = JSON.parse(JSON.stringify(locationSearch.has("radiusStyle") ? locationSearch.get("radiusStyle") : {}));
      console.log(radiusStyle);
      debugger


    return (
      <MuiThemeProvider muiTheme={muiTheme}>

      <div id="containerStyle" style={containerStyle}>
      <h1>
        <span style={turquoiseStyle}>Spouti</span>
      </h1>

      <Card style={cardStyle}>
      <GoogleMap
        style={googleMapStyle}
        onClick={_onClick}
        onChange={_onChange}
        bootstrapURLKeys={{
          key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
          language: 'fr'
        }}
        defaultCenter={{lat: 59.938043, lng: 30.337157}}
        defaultZoom={this.props.zoom}>
        <div lat={radiusLocation.lat} lng={radiusLocation.lng} style={radiusStyle}>
        </div>
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
