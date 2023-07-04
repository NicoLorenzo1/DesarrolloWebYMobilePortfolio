import { TestBed } from '@angular/core/testing';

import { BeachServiceService } from './beach-service.service';

describe('BeachServiceService', () => {
  let service: BeachServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeachServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
