import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createHistory             from 'history/lib/createHistory';
import routes                    from 'routes';
import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import { events, location }                   from 'reducers';

const app = express();
app.use('/dist', express.static('dist'));
app.use((req, res) => {
  const location = req.path;
  const reducer  = combineReducers({ events, location });
  const store    = createStore(reducer);
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');
    const InitialComponent = (
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
    );
    const initialState = store.getState();
    const componentHTML = renderToString(InitialComponent);
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>84event feed</title>
        <script type="application/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </head>
      <body style="position:absolute;width:100%;height:100%;padding: 0; margin:0;">
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="dist/bundle.js"></script>
      </body>
     </html>
`
    res.end(HTML);
  });
});
export default app;
