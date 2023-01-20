import { TestBed } from '@angular/core/testing';

import { ApiFakeJsonService } from './api-fake-json.service';

describe('ApiFakeJsonService', () => {
  let service: ApiFakeJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFakeJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
