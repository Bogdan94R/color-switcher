import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { SelectDropDownModule } from '../shared/components/select-drop-down/select-drop-down.module';
import { effects } from './store/effects';
import * as fromColorSwitcherReducer from './store/reducers/color-switcher.reducer';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ColorSwitcherComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SelectDropDownModule,
    FormsModule,
    StoreModule.forFeature(
      fromColorSwitcherReducer.colorSwitcherFeatureKey,
      fromColorSwitcherReducer.reducer,
    ),
    EffectsModule.forFeature([...effects]),
  ]
})
export class HomeModule { }
