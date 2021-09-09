import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    isFavorite: true
  };
  tweet = {
    body: 'here is the body of the tweet',
    isLiked: false,
    likeCount: 35
  };

  onChange(eventArgs): void {
    console.log('something changed in favorite component', eventArgs);
  }


  tweetChange(): void {
    this.tweet.likeCount += this.tweet.isLiked ? -1 : 1;
    // this.tweet.isLiked ? this.tweet.likeCount-- : this.tweet.likeCount++;
    this.tweet.isLiked = !this.tweet.isLiked;
  }
}
