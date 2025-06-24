import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterDto } from 'src/app/models/register-dto';
import { RegisterError } from 'src/app/models/errors/register-error';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/_services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword = signal(true);
  hideRepeatPassword = signal(true);
  model: RegisterDto = new RegisterDto();
  errors: RegisterError = new RegisterError();

  constructor(
    private toastr: ToastrService,
    private validatorService: ValidatorService
  ) {}

  togglePassword(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }
  toggleRepeatPassword(event: MouseEvent) {
    this.hideRepeatPassword.set(!this.hideRepeatPassword());
    event.stopPropagation();
  }

  register(registerForm: NgForm) {
    this.errors = new RegisterError();

    this.errors.email = this.validatorService.validateEmail(this.model.email);
    this.errors.password = this.validatorService.validatePassword(
      this.model.password
    );

    this.errors.repeatPassword =
      this.validatorService.validatePassword(this.model.repeatPassword) ||
      this.validatorService.comparePasswords(
        this.model.password,
        this.model.repeatPassword
      );

    if (
      this.errors.email ||
      this.errors.password ||
      this.errors.repeatPassword
    ) {
      return;
    }

    registerForm.resetForm();

    // TO DO - Implement API authentication and handle response

    this.toastr.success('Signed up successfully.');
  }
}
