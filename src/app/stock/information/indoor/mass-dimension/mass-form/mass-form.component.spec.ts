import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassFormComponent } from './mass-form.component';

describe('MassFormComponent', () => {
  let component: MassFormComponent;
  let fixture: ComponentFixture<MassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
