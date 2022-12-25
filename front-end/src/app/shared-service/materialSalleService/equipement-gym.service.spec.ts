import { TestBed } from '@angular/core/testing';

import { EquipementGymService } from './equipement-gym.service';

describe('EquipementGymService', () => {
  let service: EquipementGymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipementGymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
