import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamSalleComponent } from './iteam-salle.component';

describe('IteamSalleComponent', () => {
  let component: IteamSalleComponent;
  let fixture: ComponentFixture<IteamSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteamSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
