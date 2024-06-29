import { TestBed } from '@angular/core/testing';

import { ApproveTimeOffServiceService } from './approve-time-off-service.service';

describe('ApproveTimeOffServiceService', () => {
  let service: ApproveTimeOffServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveTimeOffServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
