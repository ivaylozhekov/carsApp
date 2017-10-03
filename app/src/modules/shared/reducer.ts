import { handleActions } from 'redux-actions';
import { FooterElement } from '../../models/FooterElement';

// tslint:disable-next-line:no-var-requires
const siteContent = require('../../../../site_content.json');

const initialState = {
    title: 'Citroene App',
    loader: false,
    navigationElements: siteContent.Navigation,
    footerElements: siteContent.Footer as FooterElement,
};

export const shared = handleActions({

}, initialState);
