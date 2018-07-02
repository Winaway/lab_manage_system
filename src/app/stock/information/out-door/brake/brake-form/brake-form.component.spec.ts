import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakeFormComponent } from './brake-form.component';

describe('BrakeFormComponent', () => {
  let component: BrakeFormComponent;
  let fixture: ComponentFixture<BrakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
