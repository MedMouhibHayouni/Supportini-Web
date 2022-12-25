import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalleComponent } from './my-salle.component';

describe('MySalleComponent', () => {
  let component: MySalleComponent;
  let fixture: ComponentFixture<MySalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
