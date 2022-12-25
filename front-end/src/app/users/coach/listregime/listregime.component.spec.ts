import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListregimeComponent } from './listregime.component';

describe('ListregimeComponent', () => {
  let component: ListregimeComponent;
  let fixture: ComponentFixture<ListregimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListregimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListregimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
