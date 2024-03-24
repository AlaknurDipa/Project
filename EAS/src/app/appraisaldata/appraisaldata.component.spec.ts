import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisaldataComponent } from './appraisaldata.component';

describe('AppraisaldataComponent', () => {
  let component: AppraisaldataComponent;
  let fixture: ComponentFixture<AppraisaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisaldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppraisaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
