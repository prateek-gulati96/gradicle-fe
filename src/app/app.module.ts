import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PopupComponentComponent } from './landing-page/popup-component/popup-component.component';
import { BlogsComponent } from './blogs/blogs.component';
import {  HttpClientModule } from '@angular/common/http';
import { PreArrivalComponent } from './pre-arrival/pre-arrival.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PopupComponentComponent,
    BlogsComponent,
    PreArrivalComponent,
    truncate
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
