import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenAnnonceComponent } from './top-ten-annonce.component';

describe('TopTenAnnonceComponent', () => {
  let component: TopTenAnnonceComponent;
  let fixture: ComponentFixture<TopTenAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
