import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAjoutProduitComponent } from './gestion-ajout-produit.component';

describe('GestionAjoutProduitComponent', () => {
  let component: GestionAjoutProduitComponent;
  let fixture: ComponentFixture<GestionAjoutProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAjoutProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAjoutProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
