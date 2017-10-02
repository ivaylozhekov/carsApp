declare var require: any;
require('file?name=[name].[ext]!./index.html');
require('./styles/main.less');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import routes from './routes';

ReactDOM.render(
  <ReduxProvider store={store}>
      <Router history={syncHistoryWithStore(browserHistory, store)}>
        {routes(store)}
      </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
