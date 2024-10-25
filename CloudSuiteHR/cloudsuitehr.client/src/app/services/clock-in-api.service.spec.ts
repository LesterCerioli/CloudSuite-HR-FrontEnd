import { TestBed } from '@angular/core/testing';

import { ClockInApiService } from './clock-in-api.service';

describe('ClockInApiService', () => {
  let service: ClockInApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockInApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
