import React                  from 'react';
import EventsView             from 'components/EventsView';
import EventsForm             from 'components/EventsForm';
import { bindActionCreators } from 'redux';
import * as EventsActions       from 'actions/EventsActions';
import { connect }            from 'react-redux';
@connect(state => ({ events: state.events }))
export default class Home extends React.Component {
  render() {
    const { events, dispatch } = this.props;

    return (
      <div id="events-list">
        <EventsForm
          {...bindActionCreators(EventsActions, dispatch)} />
        <EventsView events={events}
          {...bindActionCreators(EventsActions, dispatch)} />
      </div>
    );
  }
}
