import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRegimeComponent } from './ajouter-regime.component';

describe('AjouterRegimeComponent', () => {
  let component: AjouterRegimeComponent;
  let fixture: ComponentFixture<AjouterRegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRegimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
