import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {cardStyle, cardTextStyle, cardDateStyle, cardPlaceStyle, cardDistanceStyle, skewStyle, cardTitleStyle} from './common_style.js';

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
                 <CardTitle style={cardTitleStyle} title={event.eventName} />
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

              </Card>
            );
          })
        }
      </div>
    );
  }
}
