import { TestBed } from '@angular/core/testing';

import { ProduitserviceService } from './produitservice.service';

describe('ProduitserviceService', () => {
  let service: ProduitserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
