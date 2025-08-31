import { TestBed } from '@angular/core/testing';

import { RaceTraceService } from './race-trace.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RaceTraceService', () => {
  let service: RaceTraceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RaceTraceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
