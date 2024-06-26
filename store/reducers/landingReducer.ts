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
        draft.undoStack.push(state.palette);
        if (draft.undoStack.length > 100) {
          draft.undoStack.shift();
        }
        draft.palette = action.palette;
        draft.redoStack = [];
        draft.liked = false;
        break;
      case types.LANDING_LIKE_BUTTON_CLICKED:
        draft.liked = !state.liked;
        break;
      case types.LANDING_UNDO_CLICKED:
        if (state.undoStack.length > 0) {
          draft.redoStack.push(state.palette);
          draft.palette = draft.undoStack.pop();
        }
        break;
      case types.LANDING_REDO_CLICKED:
        if (state.redoStack.length > 0) {
          draft.undoStack.push(state.palette);
          draft.palette = draft.redoStack.pop();
        }
        break;
      default:
        return state;
    }
  });
};
