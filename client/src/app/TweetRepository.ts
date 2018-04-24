import { Injectable } from '@angular/core';
import { WorobyeApi } from './WorobyeApi';
import { Tweet } from './tweet/tweet.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TweetRepository {
  constructor(private worobyeApi: WorobyeApi) { }

  getTweets(): Observable<any> {
    return this.worobyeApi.getTweets();
  }

  getTweetsInFolder(): Observable<any> {
    return this.worobyeApi.getTweetsInFolder();
  }

  postTweet(tweet: Tweet) {
    this.worobyeApi.postTweet(tweet)
      .subscribe((resp) => { console.log(resp); }, (err) => console.error(err));
  }
}
