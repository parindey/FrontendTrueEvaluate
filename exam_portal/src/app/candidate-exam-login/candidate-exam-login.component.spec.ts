import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateExamLoginComponent } from './candidate-exam-login.component';

describe('CandidateExamLoginComponent', () => {
  let component: CandidateExamLoginComponent;
  let fixture: ComponentFixture<CandidateExamLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateExamLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateExamLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
