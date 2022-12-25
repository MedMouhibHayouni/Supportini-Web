import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTrainerComponent } from './suivi-trainer.component';

describe('SuiviTrainerComponent', () => {
  let component: SuiviTrainerComponent;
  let fixture: ComponentFixture<SuiviTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
