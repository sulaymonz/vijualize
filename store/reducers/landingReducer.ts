import { produce } from 'immer';
import * as types from '../types';
import initialState from '../initialState';

export default (state = initialState.landing, action) => {
  // draft param reassign is the main thing of immer, so
  /* eslint-disable no-param-reassign */

  return produce(state, (draft) => {
    switch (action.type) {
      // LANDING
      case types.LANDING_CATEGORY_UPDATED:
        draft.category = action.category;
        break;
      case types.LANDING_PALETTE_UPDATED:
        draft.palette = action.palette;
        draft.liked = false;
        break;
      case types.LANDING_LIKE_BUTTON_CLICKED:
        draft.liked = !state.liked;
        break;
      default:
        return state;
    }
  });
};
