import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { TweetsService } from "../TweetsService";
import { Tweet } from "../tweet/tweet.model";

@Component({
  selector: "tweet-list",
  templateUrl: "./tweet-list.component.html",
  styleUrls: ["./tweet-list.component.scss"]
})
export class TweetListComponent implements OnInit {
  tweets: Array<Tweet>;
  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweetsService.getTweets()
    .subscribe(data => {
      this.tweets = data;
    });
  }

  public addToFolder(tweet: Tweet): void {
    this.tweetsService.postTweet(tweet);
  }
}
