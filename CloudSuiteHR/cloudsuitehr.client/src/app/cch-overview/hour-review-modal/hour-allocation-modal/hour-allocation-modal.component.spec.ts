import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourAllocationModalComponent } from './hour-allocation-modal.component';

describe('HourAllocationModalComponent', () => {
  let component: HourAllocationModalComponent;
  let fixture: ComponentFixture<HourAllocationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourAllocationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourAllocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
