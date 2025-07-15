import { formatDate } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { ValidatorService } from 'src/app/_services/validator.service';
import { RegisterDto } from 'src/app/models/register-dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword = signal(true);
  hideRepeatPassword = signal(true);

  loginForm = this.formBuilder.group(
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

  personalDataForm = this.formBuilder.group({
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
  isLinear = true;

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private userService: UserService
  ) {}

  get email() {
    return this.loginForm.get('email')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }
  get repeatPassword() {
    return this.loginForm.get('repeatPassword')?.value;
  }

  get name() {
    return this.personalDataForm.get('name')?.value;
  }
  get surname() {
    return this.personalDataForm.get('surname')?.value;
  }
  get gender() {
    return this.personalDataForm.get('gender')?.value;
  }
  get dateOfBirth(): string | null {
    const value = this.personalDataForm.get('dateOfBirth')?.value;
    if (!value) return null;

    return formatDate(value, 'yyyy-MM-dd', 'en-US');
  }

  submit() {
    let registerDto: RegisterDto = new RegisterDto();

    registerDto.email = this.email!;
    registerDto.password = this.password!;
    registerDto.repeatPassword = this.repeatPassword!;
    registerDto.name = this.name!;
    registerDto.surname = this.surname!;
    registerDto.gender = this.gender!;
    registerDto.dateOfBirth = this.dateOfBirth!;

    console.log(registerDto);

    this.userService.register(registerDto).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  togglePassword(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }
  toggleRepeatPassword(event: MouseEvent) {
    this.hideRepeatPassword.set(!this.hideRepeatPassword());
    event.stopPropagation();
  }

  //   // TO DO - Implement API authentication and handle response

  //  ('Signed up successfully.');
  // }
}
