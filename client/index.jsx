import React       from 'react';
import { render }  from 'react-dom';
import { Router, browserHistory }  from 'react-router';
import routes      from 'routes';
import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers                    from 'reducers';
import { fromJS }                       from 'immutable';
import { applyMiddleware } from 'redux';
import promiseMiddleware   from 'lib/promiseMiddleware';

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
   });

const reducer = combineReducers(reducers);
//const store   = createStore(reducer, initialState);
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('react-view')
);
