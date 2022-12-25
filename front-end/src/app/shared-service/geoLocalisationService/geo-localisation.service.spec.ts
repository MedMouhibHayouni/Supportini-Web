import { TestBed } from '@angular/core/testing';

import { GeoLocalisationService } from './geo-localisation.service';

describe('GeoLocalisationService', () => {
  let service: GeoLocalisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoLocalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
