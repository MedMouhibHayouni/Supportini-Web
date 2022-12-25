import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSettingComponent } from './profil-setting.component';

describe('ProfilSettingComponent', () => {
  let component: ProfilSettingComponent;
  let fixture: ComponentFixture<ProfilSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
