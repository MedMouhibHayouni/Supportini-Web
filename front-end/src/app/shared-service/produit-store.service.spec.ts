import { TestBed } from '@angular/core/testing';

import { ProduitStoreService } from './produit-store.service';

describe('ProduitStoreService', () => {
  let service: ProduitStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
