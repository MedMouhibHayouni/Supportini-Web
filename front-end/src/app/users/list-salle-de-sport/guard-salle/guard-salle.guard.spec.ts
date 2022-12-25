import { TestBed } from '@angular/core/testing';

import { GuardSalleGuard } from './guard-salle.guard';

describe('GuardSalleGuard', () => {
  let guard: GuardSalleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardSalleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
