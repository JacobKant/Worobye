import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from './tweet/tweet.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorobyeApi {
  constructor(private http: HttpClient) {}

  public getTweets(): Observable<any> {
    return this.http.get('/api/tweets');
  }

  getTweetsInFolder(): Observable<any> {
    return this.http.get('/api/folder');
  }

  public postTweet(tweet: Tweet): Observable<any> {
    return this.http.post('/api/tweets', tweet);
  }
}
