import { Injectable } from '@angular/core';
import {AppDataService} from './app-data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends AppDataService{

  constructor(public http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/', http);
  }
}
