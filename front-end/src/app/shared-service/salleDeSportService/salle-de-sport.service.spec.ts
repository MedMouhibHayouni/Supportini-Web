import { TestBed } from '@angular/core/testing';

import { SalleDeSportService } from './salle-de-sport.service';

describe('SalleDeSportService', () => {
  let service: SalleDeSportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleDeSportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
