import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-archive-single',
  templateUrl: './blog-archive-single.component.html',
  styleUrls: ['./blog-archive-single.component.scss']
})
export class BlogArchiveSingleComponent implements OnInit {
  year: number;
  month: number;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramsMap => {
      this.year = +paramsMap.get('year');
      this.month = +paramsMap.get('month');
    });
  }

  onView(): void {
    this.router.navigate(['/archive']);
  }
}
