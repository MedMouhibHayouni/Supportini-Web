import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTabComponent } from './suivi-tab.component';

describe('SuiviTabComponent', () => {
  let component: SuiviTabComponent;
  let fixture: ComponentFixture<SuiviTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
