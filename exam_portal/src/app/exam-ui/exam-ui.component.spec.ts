import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamUIComponent } from './exam-ui.component';

describe('ExamUIComponent', () => {
  let component: ExamUIComponent;
  let fixture: ComponentFixture<ExamUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
