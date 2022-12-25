import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningDashboardComponent } from './list-planning-dashboard.component';

describe('ListPlanningDashboardComponent', () => {
  let component: ListPlanningDashboardComponent;
  let fixture: ComponentFixture<ListPlanningDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanningDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanningDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
