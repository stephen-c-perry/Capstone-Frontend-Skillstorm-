import { TestBed } from '@angular/core/testing';

import { RequestTimeOffServiceService } from './request-time-off-service.service';

describe('RequestTimeOffServiceService', () => {
  let service: RequestTimeOffServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTimeOffServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
