import { TestBed } from '@angular/core/testing';

import { HahaService } from './haha.service';

describe('HahaService', () => {
  let service: HahaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HahaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
