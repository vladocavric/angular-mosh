import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import {Item} from '../interfaces/item';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items$;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public  afs: AngularFirestore) {
    // this.items$ = this.afs.collection('items').valueChanges();
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));
    this.items$ = this.itemsCollection.stateChanges();
  }

  getItems(): Observable<any> {
    return this.afs.collection('items', ref => ref.orderBy('title', 'asc')).stateChanges()
      .pipe(
      map((changes: any[]) => {
       return changes.map(a => {
         const data = a.payload.doc.data() as Item;
         data.id = a.payload.doc.id;
         return data;
       });
      }),
    );
  }

  addItem(item: Item): void {
    this.afs.collection('items', ref => ref.orderBy('title', 'asc')).add(item);
  }

  deleteItem(id: string): void {
    // this.itemDoc = this.afs.doc(`items/${id}`);
    this.afs.doc(`items/${id}`).delete();
  }
  updateItem(item: Item): void {
    // this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.afs.doc(`items/${item.id}`).update(item);
  }
}
