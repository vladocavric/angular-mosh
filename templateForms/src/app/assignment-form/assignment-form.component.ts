import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.scss']
})
export class AssignmentFormComponent implements OnInit {
  categories = [
    {id: 1, category: 'Development'},
    {id: 2, category: 'Art'},
    {id: 3, category: 'Languages'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(f: any, courseName: any): void {

    console.log(courseName);
  }
}
