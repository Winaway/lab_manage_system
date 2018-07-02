import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingRangeComponent } from './driving-range.component';

describe('DrivingRangeComponent', () => {
  let component: DrivingRangeComponent;
  let fixture: ComponentFixture<DrivingRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
