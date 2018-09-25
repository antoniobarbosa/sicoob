import { TestBed, inject } from '@angular/core/testing';

import { SunvoteServiceService } from './sunvote-service.service';

describe('SunvoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SunvoteServiceService]
    });
  });

  it('should be created', inject([SunvoteServiceService], (service: SunvoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
