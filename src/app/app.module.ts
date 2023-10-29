import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { CatsInterceptor } from './interceptors/cats.interceptor';
import { FiltersComponent } from './components/quantity-filter/quantity-filter.component';
import { reducers, initialState, effects } from './app.state';

@NgModule({
  declarations: [AppComponent, CatsComponent, FiltersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers, { initialState }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      // Required for ReduxDevTools
      maxAge: 25, // Track history for 25 actions
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
