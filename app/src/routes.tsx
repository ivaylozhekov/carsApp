import * as React from 'react';
import { Route, IndexRedirect } from 'react-router';

import { App, onEnter as AppOnEnter } from './App';
import { Main, onEnter as MainOnEnter } from './modules/Main';

import Dashboard, { onEnter as DashboardOnEnter }  from './modules/dashboard/components/Dashboard';
import Home, { onEnter as HomeOnEnter }  from './modules/home/components/Home';
import HomeHeader from './modules/home/components/homeHeader/HomeHeader';
import HomeSubHeader from './modules/home/components/homeSubHeader/HomeSubHeader';


import Favorite, { onEnter as FavoriteOnEnter }  from './modules/favorite/components/Favorite';
import FavoriteHeader from './modules/favorite/components/favoriteHeader/FavoriteHeader';

const routes = (store) => {
    return (
        <Route path="/" component={App} onEnter={AppOnEnter}>
            <IndexRedirect to="home" />
            <Route component={Main} onEnter={(next, replace, cb) => { MainOnEnter(store, next, replace, cb); }}>
                <Route path="home"
                       components={{stage: Home, stageHeader: HomeHeader, stageSubHeader: HomeSubHeader}}
                       onEnter={(next, replace, cb) => { HomeOnEnter(store, next, replace, cb); }} />
                <Route path="models"
                       components={{stage: Dashboard}}
                       onEnter={(next, replace, cb) => { DashboardOnEnter(store, next, replace, cb); }} />
                <Route path="favorite"
                       components={{stage: Favorite, stageHeader: FavoriteHeader}}
                       onEnter={(next, replace, cb) => { FavoriteOnEnter(store, next, replace, cb); }} />
                <Route path="populars"
                       components={{stage: Dashboard}}
                       onEnter={(next, replace, cb) => { DashboardOnEnter(store, next, replace, cb); }} />
                <Route path="about"
                       components={{stage: Dashboard}}
                       onEnter={(next, replace, cb) => { DashboardOnEnter(store, next, replace, cb); }} />
                <Route path="contact"
                       components={{stage: Dashboard}}
                       onEnter={(next, replace, cb) => { DashboardOnEnter(store, next, replace, cb); }} />
            </Route>
        </Route>
    );
};

export default routes;
