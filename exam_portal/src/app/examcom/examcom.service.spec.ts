import { TestBed } from '@angular/core/testing';

import { ExamserService } from './examcom.service';
describe('ExamserService', () => {
  let service: ExamserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
