import { TestBed } from '@angular/core/testing';

import { ParticlesServiceService } from './particles-service.service';

describe('ParticlesServiceService', () => {
  let service: ParticlesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticlesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
