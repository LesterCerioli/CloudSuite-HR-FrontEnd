import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourDivisionScreenComponent } from './hour-division-screen.component';

describe('HourDivisionScreenComponent', () => {
  let component: HourDivisionScreenComponent;
  let fixture: ComponentFixture<HourDivisionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourDivisionScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourDivisionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
