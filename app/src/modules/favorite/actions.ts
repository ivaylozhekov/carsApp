import { createAction } from 'redux-actions';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = createAction(TOGGLE_FAVORITE);
