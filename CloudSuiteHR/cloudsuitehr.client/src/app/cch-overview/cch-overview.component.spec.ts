import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CchOverviewComponent } from './cch-overview.component';

describe('CchOverviewComponent', () => {
  let component: CchOverviewComponent;
  let fixture: ComponentFixture<CchOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CchOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
