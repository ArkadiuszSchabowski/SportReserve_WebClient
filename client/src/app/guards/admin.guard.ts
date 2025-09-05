import { AuthService } from '../_services/auth.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../_services/token.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const toastr = inject(ToastrService);
  const router = inject(Router);

  const token = authService.currentUserSource.getValue();
  if (token) {
    let role = tokenService.getRoleFromToken();
    if (role === 'admin') {
      return true;
    } else {
      toastr.error("You don't have permission to perform this action.");
      router.navigateByUrl('/');
      return false;
    }
  }
  toastr.error('Please log in to access this resource.');
  router.navigateByUrl('/login'); 
  return false;
};
