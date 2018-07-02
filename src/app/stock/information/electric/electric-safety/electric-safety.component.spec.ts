import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricSafetyComponent } from './electric-safety.component';

describe('ElectricSafetyComponent', () => {
  let component: ElectricSafetyComponent;
  let fixture: ComponentFixture<ElectricSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
