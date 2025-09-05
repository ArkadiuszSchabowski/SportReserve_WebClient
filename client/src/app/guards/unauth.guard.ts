import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

export const unauthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);
  const router = inject(Router);

  const token = authService.currentUserSource.getValue();
  if (token) {
    toastr.error('Access denied. Please log out to see this page.');
    router.navigateByUrl('/profile/information');
    return false;
  } else {
    return true;
  }
};
