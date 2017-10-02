import { handleActions } from 'redux-actions';

// tslint:disable-next-line:no-var-requires
const siteContent = require('../../../../site_content.json');

const initialState = {
    title: 'Citroene App',
    loader: false,
    navigationElements: siteContent.Navigation,
};

export const shared = handleActions({

}, initialState);
