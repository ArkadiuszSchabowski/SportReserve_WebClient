import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetUserDto } from '../models/user/get-user-dto';
import { RegisterDto } from '../models/register-dto';
import { LoginDto } from '../models/login-dto';
import { RegisterStepOneDto } from '../models/user/register-step-one-dto';
import { map } from 'rxjs';
import { TokenDto } from '../models/token-dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsers() {
    return this.http.get<GetUserDto[]>(this.apiUrl + 'api/users');
  }

  getUser(id: number) {
    return this.http.get<GetUserDto>(this.apiUrl + `api/user/${id}`);
  }
  getUserByEmail(email: string) {
    const params = new HttpParams().set('email', email);

    return this.http.get<GetUserDto>(this.apiUrl + 'api/user/by-email', { params });
  }
  login(loginDto: LoginDto) {
    return this.http.post<TokenDto>(this.apiUrl + 'api/user/login', loginDto).pipe(
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
  validateRegisterStepOne(dto: RegisterStepOneDto) {
    return this.http.post(this.apiUrl + 'api/user/register/step1/validate', dto);
  }

  remove(id: number) {
    return this.http.delete(this.apiUrl + `api/user/${id}`);
  }
}