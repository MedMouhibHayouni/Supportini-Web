import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRegimeComponent } from './item-regime.component';

describe('ItemRegimeComponent', () => {
  let component: ItemRegimeComponent;
  let fixture: ComponentFixture<ItemRegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRegimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
