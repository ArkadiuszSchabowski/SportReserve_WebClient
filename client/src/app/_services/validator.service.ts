import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  matchPasswords(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(passwordKey)?.value;
      const repeatPasswordControl = formGroup.get(confirmPasswordKey);
      const repeatPassword = repeatPasswordControl?.value;

      if (!repeatPassword) {
        if (repeatPasswordControl?.hasError('passwordMismatch')) {
          repeatPasswordControl.setErrors(null);
        }
        return null;
      }

      if (password !== repeatPassword) {
        repeatPasswordControl?.setErrors({
          ...repeatPasswordControl.errors,
          passwordMismatch: 'Passwords do not match.',
        });
        return { passwordMismatch: 'Passwords do not match.' };
      } else {
        if (repeatPasswordControl?.hasError('passwordMismatch')) {
          const errors = { ...repeatPasswordControl.errors };
          delete errors['passwordMismatch'];
          if (Object.keys(errors).length === 0) {
            repeatPasswordControl.setErrors(null);
          } else {
            repeatPasswordControl.setErrors(errors);
          }
        }
        return null;
      }
    };
  }
}
