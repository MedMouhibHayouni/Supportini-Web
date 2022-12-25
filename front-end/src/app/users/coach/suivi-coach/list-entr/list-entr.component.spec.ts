import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntrComponent } from './list-entr.component';

describe('ListEntrComponent', () => {
  let component: ListEntrComponent;
  let fixture: ComponentFixture<ListEntrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
