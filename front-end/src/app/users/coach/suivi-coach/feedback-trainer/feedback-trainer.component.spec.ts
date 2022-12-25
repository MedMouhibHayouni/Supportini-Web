import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTrainerComponent } from './feedbackService-trainer.component';

describe('FeedbackTrainerComponent', () => {
  let component: FeedbackTrainerComponent;
  let fixture: ComponentFixture<FeedbackTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
