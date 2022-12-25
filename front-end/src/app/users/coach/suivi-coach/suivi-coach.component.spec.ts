import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCoachComponent } from './suivi-coach.component';

describe('SuiviCoachComponent', () => {
  let component: SuiviCoachComponent;
  let fixture: ComponentFixture<SuiviCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
