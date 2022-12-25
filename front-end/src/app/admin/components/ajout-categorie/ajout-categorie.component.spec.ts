import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCategorieComponent } from './ajout-categorie.component';

describe('AjoutCategorieComponent', () => {
  let component: AjoutCategorieComponent;
  let fixture: ComponentFixture<AjoutCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
