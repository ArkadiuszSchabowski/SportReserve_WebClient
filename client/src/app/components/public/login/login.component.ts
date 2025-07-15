import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/_services/validator.service';
import { LoginError } from 'src/app/models/errors/login-error';
import { LoginDto } from 'src/app/models/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private toastr: ToastrService,
    private validatorService: ValidatorService
  ) {}

  hide = signal(true);
  model: LoginDto = new LoginDto();
  errors: LoginError = new LoginError();

  login(loginForm: NgForm) {
    this.errors = new LoginError();

    if (this.errors.email || this.errors.password) {
      return;
    }
    
    loginForm.resetForm();

    //TODO - Api Call

    this.toastr.success('Logged in successfully.');
  }

  togglePassword(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
