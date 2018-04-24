import { Injectable } from '@angular/core';
import { TweetRepository } from './TweetRepository';
import { Tweet } from './tweet/tweet.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TweetsService {
  constructor(private tweetsRepository: TweetRepository) {}

  getTweets(): Observable<any> {
    return this.tweetsRepository.getTweets();
  }

  postTweet(tweet: Tweet) {
    this.tweetsRepository.postTweet(tweet);
  }

  getTweetsInFolder(): Observable<any> {
    return this.tweetsRepository.getTweetsInFolder();
  }

}
