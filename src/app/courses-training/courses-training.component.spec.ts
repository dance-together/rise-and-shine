import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTrainingComponent } from './courses-training.component';

describe('CoursesTrainingComponent', () => {
  let component: CoursesTrainingComponent;
  let fixture: ComponentFixture<CoursesTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
