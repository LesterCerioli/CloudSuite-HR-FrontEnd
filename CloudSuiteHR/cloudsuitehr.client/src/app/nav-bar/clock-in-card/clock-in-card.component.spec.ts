import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInCardComponent } from './clock-in-card.component';

describe('ClockInCardComponent', () => {
  let component: ClockInCardComponent;
  let fixture: ComponentFixture<ClockInCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClockInCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockInCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
