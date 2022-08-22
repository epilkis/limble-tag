import { TestBed } from '@angular/core/testing';

import { TagnameService } from './tagname.service';

describe('TagnameService', () => {
  let service: TagnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
