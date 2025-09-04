import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { LoginDto } from 'src/app/models/auth/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  serverError: string = '';
  validationServerErrors: string[] = [];

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    
  });
  passwordHiddenSignal = signal(true);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

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
        this.authService.setRole();
        this.toastr.success('Logged in successfully.');
        this.router.navigateByUrl('/profile/information');
      },
      error: (error) => {
        if (error.status !== 0) {
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
