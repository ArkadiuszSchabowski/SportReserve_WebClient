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
  raceStartDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = new Date(control.value);
      const today = new Date();
      const maxDate = new Date('2035-01-01');

      today.setHours(0, 0, 0, 0);

      if (startDate < today) {
        return {
          pastDate: true,
          message: 'Race start date cannot be in the past.',
        };
      }
      if (startDate > maxDate) {
        return {
          futureDate: true,
          message: `Race start date is after the allowed maximum date of 2035-01-01.`,
        };
      }
      return null;
    };
  }
  isDate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const date = new Date(control.value);
      if (isNaN(date.getTime())) {
        return { invalidDate: true, message: 'Invalid date format.' };
      }
    }
    return null;
  }
isTime(control: AbstractControl): ValidationErrors | null {
  if (control.value) {
    const timeRegex = /^(?:2[0-3]|[01]?[0-9]):[0-5]?[0-9]:[0-5]?[0-9]$/;
    if (!timeRegex.test(control.value)) {
      return {
        invalidTime: true,
        message: 'Invalid time format. Expected format is HH:mm:ss.',
      };
    }
  }
  return null;
}
}
