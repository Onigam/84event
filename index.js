'use strict';
require('babel-register')();

var server = require('./server.jsx').default;
const PORT = process.env.PORT || 8080;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
