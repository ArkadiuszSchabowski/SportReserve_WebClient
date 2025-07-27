import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetUserDto } from '../models/user/get-user-dto';
import { RegisterDto } from '../models/register-dto';
import { LoginDto } from '../models/login-dto';
import { RegisterStepOneDto } from '../models/user/register-step-one-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<GetUserDto[]>(this.apiUrl + "users");
  }

  getUser(id: number) {
    return this.http.get<GetUserDto>(this.apiUrl + `user/${id}`);
  }
  getUserByEmail(email: string) {
    let params = new HttpParams().set('email', email);

    return this.http.get<GetUserDto>(this.apiUrl + 'user/by-email', { params });
  }
  login(dto: LoginDto){
    return this.http.post(this.apiUrl + 'user/login', dto);
  }

  register(dto: RegisterDto) {
    return this.http.post<string>(this.apiUrl + 'user/register', dto);
  }
  validateRegisterStepOne(dto: RegisterStepOneDto){
    return this.http.post(this.apiUrl + 'user/register/step1/validate', dto);
  }

  remove(id: number) {
    return this.http.delete(this.apiUrl + `user/${id}`);
  }
}
