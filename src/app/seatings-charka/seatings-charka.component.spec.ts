import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingsCharkaComponent } from './seatings-charka.component';

describe('SeatingsCharkaComponent', () => {
  let component: SeatingsCharkaComponent;
  let fixture: ComponentFixture<SeatingsCharkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatingsCharkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingsCharkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
