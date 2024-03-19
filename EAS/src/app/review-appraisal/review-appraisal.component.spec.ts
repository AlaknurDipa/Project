import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAppraisalComponent } from './review-appraisal.component';

describe('ReviewAppraisalComponent', () => {
  let component: ReviewAppraisalComponent;
  let fixture: ComponentFixture<ReviewAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAppraisalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
