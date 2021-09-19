import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {


  constructor(public url: string, public http: HttpClient) { }

  getAll(): any {
    return this.http.get(this.url);
  }
}
