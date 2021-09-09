import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zeppy',
  templateUrl: './zeppy.component.html',
  styleUrls: ['./zeppy.component.scss']
})
export class ZeppyComponent implements OnInit {
  @Input() title: string;
  toggle = false;

  constructor() { }

  ngOnInit(): void {
  }


}
