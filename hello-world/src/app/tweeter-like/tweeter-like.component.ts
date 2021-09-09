import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tweeter-like',
  templateUrl: './tweeter-like.component.html',
  styleUrls: ['./tweeter-like.component.scss']
})
export class TweeterLikeComponent implements OnInit {
  @Input() count: number;
  @Input() isLiked: boolean;

  @Output() like = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onLike(): void {
    this.like.emit();
  }
}
