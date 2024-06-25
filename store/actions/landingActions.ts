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
