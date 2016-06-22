import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {cardStyle, cardTextStyle, cardDateStyle, cardPlaceStyle, cardDistanceStyle} from './common_style.js';

export default class EventsView extends React.Component {
  render() {
    return (
      <div id="events-list">
        {
          this.props.events.map( (event, index) => {
            return (
              <Card style={cardStyle}>
              <CardMedia>
                <img src={event.eventCoverPicture}>
                </img>
                </CardMedia>
                <CardTitle title={event.eventName} />
                <CardText >
                  <div style={cardTextStyle}>
                    {event.eventDescription}
                  </div>
                  <div style={cardDateStyle}>
                    {event.eventStarttime}
                  </div>
                  <div style={cardPlaceStyle}>
                    {event.venueLocation.city}&nbsp;
                    {event.venueLocation.street}&nbsp;
                    {event.venueLocation.zip}
                  </div>
                  <div style={cardDistanceStyle}>
                    {event.eventDistance} meters from here
                  </div>
                </CardText>
                <FlatButton label="Read more" secondary={true} />
              </Card>
            );
          })
        }
      </div>
    );
  }
}
