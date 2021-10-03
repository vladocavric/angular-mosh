import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService extends DataService {
  baseUrl = `${environment.firebase.databaseURL}`;

  constructor(public http: HttpClient) {
    super(`${environment.firebase.databaseURL}`, '/posts', http);
  }
}
