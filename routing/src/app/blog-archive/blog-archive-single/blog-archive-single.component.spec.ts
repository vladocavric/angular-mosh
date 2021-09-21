import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveSingleComponent } from './blog-archive-single.component';

describe('BlogArchiveSingleComponent', () => {
  let component: BlogArchiveSingleComponent;
  let fixture: ComponentFixture<BlogArchiveSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArchiveSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
