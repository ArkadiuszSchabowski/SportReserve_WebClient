import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';
import { LoginDto } from 'src/app/models/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    serverError: string = '';
  validationServerErrors: string[] = [];

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  passwordHiddenSignal = signal(true);

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) {}

  changePasswordVisibility(event: MouseEvent) {
    this.passwordHiddenSignal.set(!this.passwordHiddenSignal());
    event.stopPropagation();
  }

  login() {
    this.validationServerErrors = [];

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let credentials: LoginDto = {
      email: this.form.get('email')!.value,
      password: this.form.get('password')!.value,
    };

    this.userService.login(credentials).subscribe({
      next: () => {
        this.toastr.success('Logged in successfully.');
        this.router.navigateByUrl('/profile/information');
      },
      error: (error) => {
        if(error.status !== 0){
          this.toastr.error(error.error);
          this.validationServerErrors = error;
        }
      },
    });
  }

    get emailError(): string | null {
    const control = this.form.get('email');

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

  get passwordError(): string | null {
    const control = this.form.get('password');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Password is required.';
      }
    }
    return null;
  }
}
