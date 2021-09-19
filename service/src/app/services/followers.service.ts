import { Injectable } from '@angular/core';
import {AppDataService} from './app-data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends AppDataService{

  constructor(public http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
