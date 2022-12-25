import { TestBed } from '@angular/core/testing';

import { SuiviServiceService } from './suivi-service.service';

describe('SuiviServiceService', () => {
  let service: SuiviServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
