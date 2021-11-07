import { TestBed } from '@angular/core/testing';

import { TutorailService } from './tutorail.service';

describe('TutorailService', () => {
  let service: TutorailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
