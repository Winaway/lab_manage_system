import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HornComponent } from './horn.component';

describe('HornComponent', () => {
  let component: HornComponent;
  let fixture: ComponentFixture<HornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
