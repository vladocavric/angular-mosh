import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FollowersService} from '../../services/followers.service';

interface User {
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
}

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private followersService: FollowersService) {
  }

  ngOnInit(): void {
    console.log('on init');
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.followersService.getOne(id).subscribe(res => {
        this.user = res;
      });
    });
    // this.route.params.subscribe((params) => {
    //   this.followersService.getOne(params.id).subscribe(res => {
    //     this.user = res;
    //   });
    // });
  }


}
