import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSource = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private toastr: ToastrService) {
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
}
