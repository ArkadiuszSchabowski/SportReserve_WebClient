import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  public validateEmail(email: string): string | null {
    if (!email) {
      return 'Email address cannot be empty.';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      return 'Invalid email address format.';
    }
    return null;
  }

  public validatePassword(password: string): string | null {
    if (password.length < 5 || password.length > 25) {
      return 'Password must be between 5 and 25 characters.';
    }
    return null;
  }

  public comparePasswords(
    password: string,
    repeatPassword: string
  ): string | null {
    if (password != repeatPassword) {
      return 'Passwords do not match.';
    }
    return null;
  }
}
