import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialComponent } from './medial.component';

describe('MedialComponent', () => {
  let component: MedialComponent;
  let fixture: ComponentFixture<MedialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
