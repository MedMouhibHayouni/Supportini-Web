import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceActorComponent } from './choice-actor.component';

describe('ChoiceActorComponent', () => {
  let component: ChoiceActorComponent;
  let fixture: ComponentFixture<ChoiceActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
