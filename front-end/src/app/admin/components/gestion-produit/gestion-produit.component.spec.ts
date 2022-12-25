import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProduitComponent } from './gestion-produit.component';

describe('GestionProduitComponent', () => {
  let component: GestionProduitComponent;
  let fixture: ComponentFixture<GestionProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
