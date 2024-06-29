import { TestBed } from '@angular/core/testing';

import { PaystubsService } from './paystubs.service';

describe('PaystubsService', () => {
  let service: PaystubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaystubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
