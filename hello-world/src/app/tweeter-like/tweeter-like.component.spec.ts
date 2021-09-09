import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweeterLikeComponent } from './tweeter-like.component';

describe('TweeterLikeComponent', () => {
  let component: TweeterLikeComponent;
  let fixture: ComponentFixture<TweeterLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweeterLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweeterLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
