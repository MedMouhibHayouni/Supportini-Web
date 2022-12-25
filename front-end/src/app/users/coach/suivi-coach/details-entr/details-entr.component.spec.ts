import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEntrComponent } from './details-entr.component';

describe('DetailsEntrComponent', () => {
  let component: DetailsEntrComponent;
  let fixture: ComponentFixture<DetailsEntrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEntrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEntrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
