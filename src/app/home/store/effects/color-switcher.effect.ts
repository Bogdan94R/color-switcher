import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as fromColorSwitcher from '../actions/color-switcher.action';
import { AppConfigService } from '../services/app-config.service';
import { AppConfiguration } from '../../../core/models';

@Injectable()
export class ColorSwitcherEffect {
  getColorSwitcherConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromColorSwitcher.getJSONConfig),
      mergeMap(({ fileName }) =>
        this.appConfigService.getConfig(fileName).pipe(
          map((config: AppConfiguration) => fromColorSwitcher.setJSONConfig({ config })),
          catchError((error: any) => of(fromColorSwitcher.requestFailed({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private appConfigService: AppConfigService,
  ) {}
}
