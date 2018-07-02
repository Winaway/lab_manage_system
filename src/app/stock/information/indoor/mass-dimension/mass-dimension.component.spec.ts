import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassDimensionComponent } from './mass-dimension.component';

describe('MassDimensionComponent', () => {
  let component: MassDimensionComponent;
  let fixture: ComponentFixture<MassDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
