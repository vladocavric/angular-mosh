import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {FirebaseService} from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient, private fbService: FirebaseService) {
  }

  title = 'fbDemo';

  onClick(): void {
    this.fbService.addOne({text: 'novi tekst', title: 'novi title'}).subscribe(res => console.log(res));
  }

  getPosts(): void {
    this.fbService.getAll().subscribe(posts => console.log(posts));
  }

  deletePost(id: string): void {
    this.fbService.deleteOne(id).subscribe();
  }
}
