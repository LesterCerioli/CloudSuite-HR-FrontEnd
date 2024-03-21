import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourReviewerComponent } from './hour-reviewer.component';

describe('HourReviewerComponent', () => {
  let component: HourReviewerComponent;
  let fixture: ComponentFixture<HourReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourReviewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
