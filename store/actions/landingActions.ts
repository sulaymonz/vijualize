import * as types from '../types';

// LANDING
export function landingCategoryUpdated(category) {
  return { type: types.LANDING_CATEGORY_UPDATED, category };
}

export function landingPaletteUpdated(palette) {
  return { type: types.LANDING_PALETTE_UPDATED, palette };
}

export function landingLikeButtonClicked() {
  return { type: types.LANDING_LIKE_BUTTON_CLICKED };
}

export function landingUndoClicked() {
  return { type: types.LANDING_UNDO_CLICKED };
}

export function landingRedoClicked() {
  return { type: types.LANDING_REDO_CLICKED };
}

export function landingDesignLoaded(id) {
  return { type: types.LANDING_DESIGN_LOADED, id };
}

export function landingDesignUnmounted(id) {
  return { type: types.LANDING_DESIGN_UNMOUNTED, id };
}
