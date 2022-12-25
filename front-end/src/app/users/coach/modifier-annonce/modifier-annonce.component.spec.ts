import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAnnonceComponent } from './modifier-annonce.component';

describe('ModifierAnnonceComponent', () => {
  let component: ModifierAnnonceComponent;
  let fixture: ComponentFixture<ModifierAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
