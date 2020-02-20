import { createAction, props } from '@ngrx/store';

import { AppConfiguration } from '../../../core/models';

export const getJSONConfig = createAction(
  '[Color Switcher] Get JSON Config',
  props<{ fileName: string }>(),
);

export const setJSONConfig = createAction(
  '[Color Switcher] Set JSON Config',
  props<{ config: AppConfiguration }>(),
);

export const requestFailed = createAction(
  '[Color Switcher] Request Failed',
  props<{ error: any }>(),
);
