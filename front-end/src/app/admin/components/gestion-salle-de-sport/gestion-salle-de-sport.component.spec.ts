import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSalleDeSportComponent } from './gestion-salle-de-sport.component';

describe('GestionSalleDeSportComponent', () => {
  let component: GestionSalleDeSportComponent;
  let fixture: ComponentFixture<GestionSalleDeSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSalleDeSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSalleDeSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
