import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakeComponent } from './brake.component';

describe('BrakeComponent', () => {
  let component: BrakeComponent;
  let fixture: ComponentFixture<BrakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
