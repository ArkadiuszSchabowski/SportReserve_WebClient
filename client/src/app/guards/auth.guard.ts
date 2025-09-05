import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);
  const router = inject(Router);

  const token = authService.currentUserSource.getValue();
  if (token) {
    return true;
  } else {
    toastr.error('Please log in to access this resource.');
    router.navigateByUrl('/login');
    return false;
  }
};
