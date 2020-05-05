import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { AppleComponent } from './apple/apple.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TechcrunchComponent,
    AppleComponent,
    BitcoinComponent,
    HeadlinesComponent
  ],
  imports: [
  

  BrowserModule,
  HttpClientModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
