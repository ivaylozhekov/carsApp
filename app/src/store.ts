declare var window; // its for the devtools
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from './middleware/redux-promise';
import * as logger from 'redux-logger';

import { routerReducer as routing } from 'react-router-redux';
import {shared, dashboard, home, favorite} from './reducers';

const isProd = (process.env.NODE_ENV === 'production');

let middleware = [
        promise,
];
if (!isProd) middleware.push(logger());

export default
createStore(
combineReducers(
    {
        routing,
        shared,
        dashboard,
        home,
        favorite,
    }),
    !isProd && window.devToolsExtension ? window.devToolsExtension() : f => f,
    applyMiddleware(...middleware)
);
