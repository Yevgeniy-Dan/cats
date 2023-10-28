import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';

@NgModule({
  declarations: [AppComponent, CatsComponent],
  imports: [BrowserModule, HttpClientModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
