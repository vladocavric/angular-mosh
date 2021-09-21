import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(public url: string, public http: HttpClient) {
  }

  getAll(data: string): Observable<any> {
    return this.http.get(this.url + data);
  }

  getOne(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
