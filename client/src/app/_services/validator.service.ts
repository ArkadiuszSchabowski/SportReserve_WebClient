import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  public validatePassword(password: string): string | null {
    if (password.length < 5 || password.length > 25) {
      return 'Password must be between 5 and 25 characters.';
    }
    return null;
  }

  public matchPasswords(
    passwordKey: string,
    confirmPasswordKey: string
  ): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(passwordKey);
      const confirmPasswordControl = formGroup.get(confirmPasswordKey);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null;
    };
  }
}
