import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSalleDeSportModificationComponent } from './gestion-salle-de-sport-modification.component';

describe('GestionSalleDeSportModificationComponent', () => {
  let component: GestionSalleDeSportModificationComponent;
  let fixture: ComponentFixture<GestionSalleDeSportModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSalleDeSportModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSalleDeSportModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
