import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandFootComponent } from './hand-foot.component';

describe('HandFootComponent', () => {
  let component: HandFootComponent;
  let fixture: ComponentFixture<HandFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
