import { TestBed } from '@angular/core/testing';

import { RestRegistrationService } from './rest-registration.service';

describe('RestRegistrationService', () => {
  let service: RestRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
