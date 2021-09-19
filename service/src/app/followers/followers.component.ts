import { Component, OnInit } from '@angular/core';
import {FollowersService} from '../services/followers.service';

interface Follower {
  avatar_url: string;
  login: string;
  url: string;
}

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: Follower[];

  constructor(private followersService: FollowersService) { }

  ngOnInit(): void {
    this.followersService.getAll().subscribe(res => {
      this.followers = res;
    });
  }

}
