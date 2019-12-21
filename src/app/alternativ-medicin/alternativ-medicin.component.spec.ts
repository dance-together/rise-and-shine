import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativMedicinComponent } from './alternativ-medicin.component';

describe('AlternativMedicinComponent', () => {
  let component: AlternativMedicinComponent;
  let fixture: ComponentFixture<AlternativMedicinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativMedicinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativMedicinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
