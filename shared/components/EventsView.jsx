import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {cardStyle} from './common_style.js';

export default class EventsView extends React.Component {
  render() {
    return (
      <div id="events-list">
        {
          this.props.events.map( (event, index) => {
            return (
              <Card style={cardStyle}>
              <CardMedia
                overlay={<CardTitle title={event.eventName} />}>
                <img src={event.eventCoverPicture}>
                </img>
                </CardMedia>
                <CardText>
                  {event.eventDescription}
                </CardText>
                <div>
                  {event.eventStarttime}
                </div>
                <CardText>
                  {event.venueLocation.city}
                  {event.venueLocation.street}
                  {event.venueLocation.zip}
                </CardText>
                <div>
                  {event.eventDistance}
                </div>
              </Card>
            );
          })
        }
      </div>
    );
  }
}
