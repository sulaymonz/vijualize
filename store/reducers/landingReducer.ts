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
        break;
      default:
        return state;
    }
  });
};
