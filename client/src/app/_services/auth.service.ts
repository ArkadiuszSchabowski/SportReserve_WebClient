import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSource = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  currentRoleSource = new BehaviorSubject<string | null>(null);
  currentRole$ = this.currentRoleSource.asObservable();

  constructor(private toastr: ToastrService, private tokenService: TokenService) {
    this.setUser();
  }
  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.toastr.success('Logged out successfully.');
  }

  setUser() {
    const token = localStorage.getItem('token');
    if (token) {
      this.currentUserSource.next(token);
    }
  }
  setRole(){
    const role = this.tokenService.getRoleFromToken();
    this.currentRoleSource.next(role);
  }
}
