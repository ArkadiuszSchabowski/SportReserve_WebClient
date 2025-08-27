import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RaceService } from './race.service';
import { TestBed } from '@angular/core/testing';

describe('RaceService', () => {
  let service: RaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
