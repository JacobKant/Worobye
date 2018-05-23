import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
