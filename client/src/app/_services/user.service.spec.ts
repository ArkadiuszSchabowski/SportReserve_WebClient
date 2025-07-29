import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

describe('UserService', () => {
  let service: UserService;
  let toastrService: ToastrService;

  class MockToastrService {
    success(message: string) {
      console.log(message);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    toastrService = TestBed.inject(ToastrService);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
