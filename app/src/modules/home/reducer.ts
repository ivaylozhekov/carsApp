import { handleActions } from 'redux-actions';
import { LOAD_CARS_INFO } from './actions';
import { CarElement } from '../../models/CarElement';

// tslint:disable-next-line:no-var-requires
const siteContent = require('../../../../site_content.json');

const initialState = {
  error: false,
  cars: [] as CarElement[],
  headerInfo: siteContent.Header,
  subHeaderInfo: siteContent.Subheader,
  social: siteContent.Social,
};

export const home = handleActions(
  {
    [LOAD_CARS_INFO]: (state, action: any) => {
      if (action.error) {
        return { ...state, error: true };
      } else {
        return { ...state, cars: action.payload };
      }
    },
  },
  initialState
);
