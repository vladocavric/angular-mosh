import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeppyComponent } from './zeppy.component';

describe('ZeppyComponent', () => {
  let component: ZeppyComponent;
  let fixture: ComponentFixture<ZeppyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeppyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
