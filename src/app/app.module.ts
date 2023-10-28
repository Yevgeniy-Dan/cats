import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { CatsInterceptor } from './interceptors/cats.interceptor';

@NgModule({
  declarations: [AppComponent, CatsComponent],
  imports: [BrowserModule, HttpClientModule, MatGridListModule],
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
