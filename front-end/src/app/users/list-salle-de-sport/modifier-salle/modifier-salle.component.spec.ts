import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSalleComponent } from './modifier-salle.component';

describe('ModifierSalleComponent', () => {
  let component: ModifierSalleComponent;
  let fixture: ComponentFixture<ModifierSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
