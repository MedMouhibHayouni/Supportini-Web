import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionModifierProduitComponent } from './gestion-modifier-produit.component';

describe('GestionModifierProduitComponent', () => {
  let component: GestionModifierProduitComponent;
  let fixture: ComponentFixture<GestionModifierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionModifierProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionModifierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
