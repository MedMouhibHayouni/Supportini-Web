import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSalleDeSportDashboardComponent } from './liste-salle-de-sport-dashboard.component';

describe('ListeSalleDeSportDashboardComponent', () => {
  let component: ListeSalleDeSportDashboardComponent;
  let fixture: ComponentFixture<ListeSalleDeSportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSalleDeSportDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSalleDeSportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
