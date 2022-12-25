import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainerAnnonceComponent } from './list-trainer-annonce.component';

describe('ListTrainerAnnonceComponent', () => {
  let component: ListTrainerAnnonceComponent;
  let fixture: ComponentFixture<ListTrainerAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrainerAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainerAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
