import { createAction } from 'redux-actions';

const siteContent = require('../../../../site_content.json');

export const LOAD_CARS_INFO = 'LOAD_CARS_INFO';
// export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const fetchCarsInfo = (userId, date, span) => {
  return siteContent.Cars;
};

export const loadCarsInfo = createAction(LOAD_CARS_INFO, fetchCarsInfo);
// export const toggleFavorite = createAction(TOGGLE_FAVORITE);

