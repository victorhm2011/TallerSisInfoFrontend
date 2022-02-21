import { TestBed } from '@angular/core/testing';

import { HellowordService } from './helloword.service';

describe('HellowordService', () => {
  let service: HellowordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HellowordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
