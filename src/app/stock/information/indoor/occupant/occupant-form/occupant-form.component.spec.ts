import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantFormComponent } from './occupant-form.component';

describe('OccupantFormComponent', () => {
  let component: OccupantFormComponent;
  let fixture: ComponentFixture<OccupantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
