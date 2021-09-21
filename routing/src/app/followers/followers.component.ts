import { Component, OnInit } from '@angular/core';
import {FollowersService} from '../services/followers.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, combineLatest} from 'rxjs/operators';

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

  constructor(private followersService: FollowersService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.followersService.getAll('mosh-hamedani/followers').subscribe(res => {
      // console.log(res)
      this.followers = res;
    });
  }

}
