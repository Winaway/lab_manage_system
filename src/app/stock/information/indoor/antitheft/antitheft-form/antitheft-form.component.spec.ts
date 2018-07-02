import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntitheftFormComponent } from './antitheft-form.component';

describe('AntitheftFormComponent', () => {
  let component: AntitheftFormComponent;
  let fixture: ComponentFixture<AntitheftFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntitheftFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntitheftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
