import { Injectable, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements OnInit {
  email = '';
  role = '';
  token: string | null = null;
  readonly emailClaim: string =
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress';
  readonly roleClaim: string =
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

  constructor() {}
  ngOnInit(): void {}

  getEmailFromToken(): string {
    this.token = localStorage.getItem('token');

    if (this.token) {
      let decodedToken: any = jwtDecode(this.token);

      this.email = decodedToken[this.emailClaim];
      return this.email;
    }
    return '';
  }

  getRoleFromToken(): string {
    this.token = localStorage.getItem('token');

    if (this.token) {
      let decodedToken: any = jwtDecode(this.token);

      this.role = decodedToken[this.roleClaim];

      return this.role;
    }
    return '';
  }
}
