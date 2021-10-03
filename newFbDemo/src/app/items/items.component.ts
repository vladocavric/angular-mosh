import {Component, OnInit} from '@angular/core';
import {Item} from '../interfaces/item';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState = false;
  itemToEdit: Item;

  constructor(private fbService: FirebaseService) {
  }

  ngOnInit(): void {
    this.fbService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  onDelete(id: string): void {
    this.fbService.deleteItem(id);
    this.fbService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  onEdit(item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  onUpdate(item: Item): void {
    this.itemToEdit = item;
    this.fbService.updateItem(this.itemToEdit);
    this.editState = false;
    console.log(this.editState)
    this.fbService.getItems().subscribe(items => {
      this.items = items;
    });
  }

}
