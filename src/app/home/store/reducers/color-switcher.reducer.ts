import { Action, createReducer, on } from '@ngrx/store';

import * as fromColorSwitcher from '../actions/color-switcher.action';
import { AppConfiguration } from '../../../core/models';

export const colorSwitcherFeatureKey = 'Color Switcher';

export interface ColorSwitcherState {
  config: AppConfiguration;
  isLoading: boolean;
  error: any;
}

const initialState: ColorSwitcherState = {
  config: null,
  isLoading: false,
  error: null,
};

export const colorSwitcherReducer = createReducer(
  initialState,
  on(fromColorSwitcher.getJSONConfig, (state: ColorSwitcherState) => ({
    ...state,
    isLoading: true,
  })),
  on(fromColorSwitcher.setJSONConfig, (state: ColorSwitcherState, { config }) => ({
    ...state,
    config,
    isLoading: false,
  })),
  on(fromColorSwitcher.requestFailed, (state: ColorSwitcherState, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
);

export function reducer(state: ColorSwitcherState | undefined, action: Action) {
  return colorSwitcherReducer(state, action);
}
