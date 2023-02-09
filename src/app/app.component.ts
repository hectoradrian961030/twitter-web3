import { Component } from '@angular/core';
import {Tweet} from "./share/model/tweet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-web3';

  public tweets: Tweet[] = [];

  public constructor() {
    let tweet = new Tweet(new Date(), "hello world", "Nico", 0, [], [], []);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "hello world 2", "Nico", 0, [], [], []);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "hello world 3", "Nico", 0, [], [], []);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "hello world 4", "Nico", 0, [], [], []);
    this.tweets.push(tweet);


  }
}
