import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAnnonceCoachComponent } from './item-annonce-coach.component';

describe('ItemAnnonceCoachComponent', () => {
  let component: ItemAnnonceCoachComponent;
  let fixture: ComponentFixture<ItemAnnonceCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAnnonceCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAnnonceCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
