import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamSalleDashboardComponent } from './iteam-salle-dashboard.component';

describe('IteamSalleDashboardComponent', () => {
  let component: IteamSalleDashboardComponent;
  let fixture: ComponentFixture<IteamSalleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteamSalleDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamSalleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
