import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteerFormComponent } from './steer-form.component';

describe('SteerFormComponent', () => {
  let component: SteerFormComponent;
  let fixture: ComponentFixture<SteerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
