import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HornFormComponent } from './horn-form.component';

describe('HornFormComponent', () => {
  let component: HornFormComponent;
  let fixture: ComponentFixture<HornFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HornFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HornFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
