import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this line

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CatRootComponent } from './components/cat-root/cat-root.component';
import { CatsInterceptor } from './interceptors/cats.interceptor';
import { breedResolver } from './resolvers/breed.resolver';
import { CatsEffects } from './store/effects/cats.effects';
import * as fromCats from './store/reducers/cats.reducer';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    FiltersComponent,
    CatRootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    StoreModule.forRoot({ cats: fromCats.reducer }),
    EffectsModule.forRoot([CatsEffects]),
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
