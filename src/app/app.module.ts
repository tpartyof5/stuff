import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import {  HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
