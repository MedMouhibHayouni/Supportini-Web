import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPlanningDashboardComponent } from './item-planning-dashboard.component';

describe('ItemPlanningDashboardComponent', () => {
  let component: ItemPlanningDashboardComponent;
  let fixture: ComponentFixture<ItemPlanningDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPlanningDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPlanningDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
