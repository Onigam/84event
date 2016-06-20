import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {


  render() {
    return (
      <div id="app-view">
        {this.props.children}
      </div>
    );
  }
}
