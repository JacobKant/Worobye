import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Tweet } from "./tweet.model";

@Component({
  selector: "tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"]
})
export class TweetComponent {
  @Input() tweet: Tweet;
  @Output() addToFolder = new EventEmitter<Tweet>();
}
