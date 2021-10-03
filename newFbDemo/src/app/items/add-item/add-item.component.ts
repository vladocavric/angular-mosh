import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Item} from '../../interfaces/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  };

  constructor(private fbService: FirebaseService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.item.title !== '' && this.item.description !== '') {
      this.fbService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
     
    }

  }
}
