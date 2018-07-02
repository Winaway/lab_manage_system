import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedFormComponent } from './speed-form.component';

describe('SpeedFormComponent', () => {
  let component: SpeedFormComponent;
  let fixture: ComponentFixture<SpeedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
