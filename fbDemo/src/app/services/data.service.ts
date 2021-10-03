import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public url: string, public col: string, public http: HttpClient) {
  }

  getAll(): any {
    return this.http.get(`${this.url}${this.col}.json`).pipe(
      map(responseData => {
        const postsArr = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArr.push({...responseData[key], id: key});
          }
        }
        return postsArr;
      })
    );
  }

  getOne(): any {
    return;
  }

  addOne(body: object): any {
    return this.http.post(`${this.url}${this.col}.json`, body);
  }

  deleteOne(id: string): any {
    return this.http.delete(`${this.url}/${id}.json`);
  }

  updateOne(id: string, body: object): any {
    return this.http.put(`${this.url}${this.col}/${id}.json`, body);
  }
}
