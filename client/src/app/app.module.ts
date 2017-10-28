import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorobyeApi } from './WorobyeApi';
import { TweetRepository } from './TweetRepository';
import { TweetsService } from './TweetsService';
import { TweetComponent } from './tweet/tweet.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    WorobyeApi,
    TweetRepository,
    TweetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
