import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { CatsInterceptor } from './interceptors/cats.interceptor';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [AppComponent, CatsComponent, FiltersComponent],
  imports: [BrowserModule, HttpClientModule, MatGridListModule, MatRadioModule],
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
