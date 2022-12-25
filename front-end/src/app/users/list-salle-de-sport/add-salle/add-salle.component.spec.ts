import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalleComponent } from './add-salle.component';

describe('AddSalleComponent', () => {
  let component: AddSalleComponent;
  let fixture: ComponentFixture<AddSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
