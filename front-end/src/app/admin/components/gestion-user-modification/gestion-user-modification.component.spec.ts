import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUserModificationComponent } from './gestion-user-modification.component';

describe('GestionUserModificationComponent', () => {
  let component: GestionUserModificationComponent;
  let fixture: ComponentFixture<GestionUserModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUserModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUserModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
