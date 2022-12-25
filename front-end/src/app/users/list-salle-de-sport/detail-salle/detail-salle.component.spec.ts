import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSalleComponent } from './detail-salle.component';

describe('DetailSalleComponent', () => {
  let component: DetailSalleComponent;
  let fixture: ComponentFixture<DetailSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
