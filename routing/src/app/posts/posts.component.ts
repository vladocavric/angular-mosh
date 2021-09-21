import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getAll('posts').subscribe(res => {
      this.posts = res;
    });
  }

}
