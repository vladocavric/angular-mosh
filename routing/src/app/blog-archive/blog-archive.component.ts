import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.scss']
})
export class BlogArchiveComponent implements OnInit {
  archive = [
    {year: 2018, month: 12},
    {year: 2018, month: 11},
    {year: 2018, month: 10},
    {year: 2018, month: 19},
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
