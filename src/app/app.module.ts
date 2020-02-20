import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot([], {}),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
