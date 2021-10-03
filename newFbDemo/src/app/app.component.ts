import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import {FirebaseService} from './services/firebase.service';
import {Item} from './interfaces/item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {


  constructor(private fbService: FirebaseService) {

  }

  ngOnInit(): void {

  }


}
