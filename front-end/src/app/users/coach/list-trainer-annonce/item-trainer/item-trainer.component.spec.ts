import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrainerComponent } from './item-trainer.component';

describe('ItemTrainerComponent', () => {
  let component: ItemTrainerComponent;
  let fixture: ComponentFixture<ItemTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
