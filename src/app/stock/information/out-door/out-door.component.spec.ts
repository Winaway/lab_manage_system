import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutDoorComponent } from './out-door.component';

describe('OutDoorComponent', () => {
  let component: OutDoorComponent;
  let fixture: ComponentFixture<OutDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
