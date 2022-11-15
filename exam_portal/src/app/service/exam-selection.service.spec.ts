import { TestBed } from '@angular/core/testing';

import { ExamSelectionService } from './exam-selection.service';

describe('ExamSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamSelectionService = TestBed.get(ExamSelectionService);
    expect(service).toBeTruthy();
  });
});
