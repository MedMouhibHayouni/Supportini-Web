import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesAnnoncesComponent } from './gestion-des-annonces.component';

describe('GestionDesAnnoncesComponent', () => {
  let component: GestionDesAnnoncesComponent;
  let fixture: ComponentFixture<GestionDesAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
