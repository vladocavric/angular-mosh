import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  @Output() someChange = new EventEmitter();
  favorite = false;
  title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.favorite = !this.favorite;
    this.someChange.emit({
      brand: 'ford',
      model: 'mustang',
      ccl: 5,
      powerInHP: 1000
    });
  }
}
