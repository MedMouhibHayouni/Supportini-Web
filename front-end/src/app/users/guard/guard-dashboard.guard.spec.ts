import { TestBed } from '@angular/core/testing';

import { GuardDashboardGuard } from './guard-dashboard.guard';

describe('GuardDashboardGuard', () => {
  let guard: GuardDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
