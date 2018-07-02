import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaFormComponent } from './para-form.component';

describe('ParaFormComponent', () => {
  let component: ParaFormComponent;
  let fixture: ComponentFixture<ParaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
