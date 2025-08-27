import { Component, signal, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { RegisterDto } from 'src/app/models/auth/register-dto';
import { RegisterStepOneDto } from 'src/app/models/auth/register-step-one-dto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';
import { ValidatorService } from 'src/app/_services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  serverError: string | null = '';
  validationModelErrors: string[] | null = [];
  passwordHiddenSignal = signal(true);
  repeatPasswordHiddenSignal = signal(true);
  isLinear = true;

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  loginDataForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
    },
    {
      validators: this.validatorService.matchPasswords(
        'password',
        'repeatPassword'
      ),
    }
  );

  personalInformationform = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    surname: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    gender: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService,
    private validatorService: ValidatorService
  ) {}

  ngOnInit() {
    this.loginDataForm.get('repeatPassword')?.valueChanges.subscribe(() => {
      this.serverError = null;
      this.validationModelErrors = null;
    });
  }

  changePasswordVisibility(event: MouseEvent) {
    this.passwordHiddenSignal.set(!this.passwordHiddenSignal());
    event.stopPropagation();
  }

  changeRepeatPasswordVisibility(event: MouseEvent) {
    this.repeatPasswordHiddenSignal.set(!this.repeatPasswordHiddenSignal());
    event.stopPropagation();
  }

  register() {
    this.validationModelErrors = [];
    this.serverError = '';

    if (this.loginDataForm.invalid || this.personalInformationform.invalid) {
      this.loginDataForm.markAllAsTouched();
      this.personalInformationform.markAllAsTouched();
      return;
    }

    let credentials: RegisterDto = {
      email: this.loginDataForm.get('email')!.value,
      password: this.loginDataForm.get('password')!.value,
      repeatPassword: this.loginDataForm.get('repeatPassword')!.value,
      name: this.personalInformationform.get('name')!.value,
      surname: this.personalInformationform.get('surname')!.value,
      gender: this.personalInformationform.get('gender')!.value,
      dateOfBirth: this.dateOfBirth,
    };

    this.userService.register(credentials).subscribe({
      next: () => {
        this.toastr.success('Registered successfully.');
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        console.log(error);
        if (error.status === 409) {
          this.serverError = error.error;
          return;
        }
        if (error.status === 400) {
          if (error.error) {
            this.serverError = error.error.message;
            return;
          }
        }
        this.validationModelErrors = error;
      },
    });
  }

  validateRegisterStepOne() {
    this.validationModelErrors = [];
    this.serverError = '';

    if (this.loginDataForm.invalid) {
      this.loginDataForm.markAllAsTouched();
      return;
    }

    let credentials: RegisterStepOneDto = {
      email: this.loginDataForm.get('email')!.value,
      password: this.loginDataForm.get('password')!.value,
      repeatPassword: this.loginDataForm.get('repeatPassword')!.value,
    };

    this.userService.validateRegisterStepOne(credentials).subscribe({
      next: () => {
        this.stepper.next();
      },
      error: (error) => {
        if (error.status === 409) {
          console.log(error);
          this.serverError = error.error.message;
          return;
        }
        this.validationModelErrors = error;
      },
    });
  }

  get dateOfBirth(): string | null {
    const value = this.personalInformationform.get('dateOfBirth')?.value;
    if (!value) return null;

    return formatDate(value, 'yyyy-MM-dd', 'en-US');
  }

  get dateOfBirthError(): string | null {
    const control = this.personalInformationform.get('dateOfBirth');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Date of birth is required.';
      }
    }
    return null;
  }

  get emailError(): string | null {
    const control = this.loginDataForm.get('email');

    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Email address is required.';
      }
      if (control.errors['email']) {
        return 'Invalid email address format.';
      }
    }
    return null;
  }

  get genderError(): string | null {
    const control = this.personalInformationform.get('gender');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'You must choose a gender.';
      }
    }
    return null;
  }

  get nameError(): string | null {
    const control = this.personalInformationform.get('name');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'User name is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'User name must be between 3 and 25 characters.';
      }
    }
    return null;
  }

  get passwordError(): string | null {
    const control = this.loginDataForm.get('password');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Password is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'Password must be between 5 and 25 characters.';
      }
    }
    return null;
  }

  get repeatPasswordError(): string | null {
    const control = this.loginDataForm.get('repeatPassword');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Repeat password is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'Password must be between 5 and 25 characters.';
      }
      if (control.errors['passwordMismatch']) {
        return control.errors['passwordMismatch'];
      }
    }
    return null;
  }

  get surnameError(): string | null {
    const control = this.personalInformationform.get('surname');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'User surname is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'User surname must be between 3 and 25 characters.';
      }
    }
    return null;
  }
}
