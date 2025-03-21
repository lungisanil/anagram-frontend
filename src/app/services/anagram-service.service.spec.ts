import { TestBed } from '@angular/core/testing';

import { AnagramService } from './anagram.service';

describe('AnagramServiceService', () => {
  let service: AnagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
