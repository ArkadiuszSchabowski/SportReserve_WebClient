import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('AuthService', () => {
  let service: AuthService;
  let toastrService: ToastrService;

  class MockToastrService {
    success(message: string) {
      console.log(message);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    toastrService = TestBed.inject(ToastrService);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
