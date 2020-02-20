import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromColorSwitcher from '../reducers/color-switcher.reducer';

export const selectColorSwitcher = createFeatureSelector<fromColorSwitcher.ColorSwitcherState>(
  fromColorSwitcher.colorSwitcherFeatureKey,
);

export const selectColorSwitcherConfig = createSelector(
  selectColorSwitcher,
  (state: fromColorSwitcher.ColorSwitcherState) => state.config,
);
