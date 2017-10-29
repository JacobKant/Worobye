import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { TweetsService } from "../TweetsService";
import { Tweet } from "../tweet/tweet.model";

@Component({
  selector: "folder",
  templateUrl: "./folder.component.html",
  styleUrls: ["./folder.component.scss"]
})
export class FolderComponent implements OnInit {
  tweets: Array<Tweet>;
  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweetsService.getTweetsInFolder()
    .subscribe(data => {
      this.tweets = data;
    });
  }

}
