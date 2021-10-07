import {Component, OnInit} from '@angular/core';
// import {Firestore, collectionData, collection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Item {
  name?: string,
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // item$: Observable<Item[]>;
  items: Observable<Item[]>;
  collection: any

  // constructor(firestore: Firestore) {
  //   this.collection = collection(firestore, 'items');
  //   this.item$ = collectionData(this.collection);
  // }
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
    // firestore.collection('items').add({name: 'nesto iz appa'})
  }

  ngOnInit(): void {
  }

  onClick(item: Item) {
    this.firestore.collection('items')
    console.log()
  }
}
