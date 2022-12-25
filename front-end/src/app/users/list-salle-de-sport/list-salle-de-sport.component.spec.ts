import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalleDeSportComponent } from './list-salle-de-sport.component';

describe('ListSalleDeSportComponent', () => {
  let component: ListSalleDeSportComponent;
  let fixture: ComponentFixture<ListSalleDeSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSalleDeSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalleDeSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
