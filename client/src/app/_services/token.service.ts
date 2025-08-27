import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  email = '';
  token: string | null = '';
  readonly emailClaim: string =
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress';

  constructor() {}

  getEmailFromToken(): string {
    this.token = localStorage.getItem('token');

    if (this.token) {
      let decodedToken: any = jwtDecode(this.token);

      this.email = decodedToken[this.emailClaim];
      return this.email;
    }
    return '';
  }
}
