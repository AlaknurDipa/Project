import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAprraisalsComponent } from './employee-aprraisals.component';

describe('EmployeeAprraisalsComponent', () => {
  let component: EmployeeAprraisalsComponent;
  let fixture: ComponentFixture<EmployeeAprraisalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAprraisalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAprraisalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
