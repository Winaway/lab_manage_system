import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedometerFormComponent } from './speedometer-form.component';

describe('SpeedometerFormComponent', () => {
  let component: SpeedometerFormComponent;
  let fixture: ComponentFixture<SpeedometerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedometerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedometerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
