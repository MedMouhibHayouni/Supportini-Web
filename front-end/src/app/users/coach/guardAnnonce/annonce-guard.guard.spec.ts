import { TestBed } from '@angular/core/testing';

import { AnnonceGuardGuard } from './annonce-guard.guard';

describe('AnnonceGuardGuard', () => {
  let guard: AnnonceGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnnonceGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
