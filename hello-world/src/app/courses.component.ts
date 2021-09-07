import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h3>{{title}}</h3>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
  `
})

export class CoursesComponent {
  title = 'list of courses';
  courses: string[];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }
}
