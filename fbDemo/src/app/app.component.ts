import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }

  title = 'fbDemo';

  onClick(): void {
    this.http.post(`${environment.firebase.databaseURL}/post.json`, {
      title: 'nesto 1',
      tekst: 'neki tekst'
    }).subscribe(res => console.log(res));
  }

  getPosts() {
    this.http.get(`${environment.firebase.databaseURL}/post.json`).subscribe(posts => console.log(posts))
  }
}
