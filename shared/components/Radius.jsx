import React from 'react';
export default class EventsForm extends React.Component {

  render() {
    return (
      <div id="events-form">
        <input type="button" value="Get all events around me!" onClick={this.getEvents} />
      </div>
    );
  }
}
