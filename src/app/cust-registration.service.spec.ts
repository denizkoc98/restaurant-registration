import { TestBed } from '@angular/core/testing';

import { CustRegistrationService } from './cust-registration.service';

describe('CustRegistrationService', () => {
  let service: CustRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
