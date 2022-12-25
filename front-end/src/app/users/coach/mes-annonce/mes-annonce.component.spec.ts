import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesAnnonceComponent } from './mes-annonce.component';

describe('MesAnnonceComponent', () => {
  let component: MesAnnonceComponent;
  let fixture: ComponentFixture<MesAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
