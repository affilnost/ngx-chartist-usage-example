import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgxChartistModule} from 'ngx-chartist';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxChartistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
