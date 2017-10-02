import { handleActions } from 'redux-actions';
import { TOGGLE_FAVORITE } from './actions';

const initialState = {
  error: false,
  favoriteCarTitles: [] as string[],
};

export const favorite = handleActions({
  [TOGGLE_FAVORITE]: (state, action: any) => {
    if (action.error) {
      return { ...state, error: true };
    } else {
      const index = state.favoriteCarTitles.indexOf(action.payload);
      if (index > -1) {
        return { ...state, favoriteCarTitles: state.favoriteCarTitles.filter(item => item !== action.payload) };
      } else {
        return { ...state, favoriteCarTitles: [...state.favoriteCarTitles, action.payload] };
      }
    }
  },
}, initialState);
