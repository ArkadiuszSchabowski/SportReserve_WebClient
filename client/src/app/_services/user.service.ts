import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetUserDto } from '../models/user/get-user-dto';
import { Injectable } from '@angular/core';
import { LoginDto } from '../models/auth/login-dto';
import { map } from 'rxjs';
import { RegisterDto } from '../models/auth/register-dto';
import { RegisterStepOneDto } from '../models/auth/register-step-one-dto';
import { TokenDto } from '../models/token-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUser(id: number) {
    return this.http.get<GetUserDto>(this.apiUrl + `api/user/${id}`);
  }

  getUserByEmail(email: string) {
    const params = new HttpParams().set('email', email);

    return this.http.get<GetUserDto>(this.apiUrl + 'api/user/by-email', {
      params,
    });
  }

  getUsers() {
    return this.http.get<GetUserDto[]>(this.apiUrl + 'api/user');
  }

  login(loginDto: LoginDto) {
    return this.http
      .post<TokenDto>(this.apiUrl + 'api/user/login', loginDto)
      .pipe(
        map((response) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.authService.currentUserSource.next(response.token);
          }
        })
      );
  }

  register(dto: RegisterDto) {
    return this.http.post<string>(this.apiUrl + 'api/user/register', dto);
  }
  remove(id: number) {
    return this.http.delete(this.apiUrl + `api/user/${id}`);
  }
  validateRegisterStepOne(dto: RegisterStepOneDto) {
    return this.http.post(
      this.apiUrl + 'api/user/register/step1/validate',
      dto
    );
  }
}
