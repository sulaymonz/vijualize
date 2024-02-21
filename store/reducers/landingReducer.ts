import { produce } from 'immer';
import * as types from '../types';
import initialState from '../initialState';

export default (state = initialState.exercise, action) => {
  // draft param reassign is the main thing of immer, so
  /* eslint-disable no-param-reassign */

  return produce(state, (draft) => {
    switch (action.type) {
      // LANDING
      case types.LANDING_CATEGORY_UPDATED:
        draft.category = action.category;
        break;
      default:
        return state;
    }
  });
};
