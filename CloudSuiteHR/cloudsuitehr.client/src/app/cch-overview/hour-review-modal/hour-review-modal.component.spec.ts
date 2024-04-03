import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourReviewModalComponent } from './hour-review-modal.component';

describe('HourReviewModalComponent', () => {
  let component: HourReviewModalComponent;
  let fixture: ComponentFixture<HourReviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourReviewModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
