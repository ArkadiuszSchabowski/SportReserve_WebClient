import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetUserDto } from '../models/user/get-user-dto';
import { RegisterDto } from '../models/register-dto';

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

  register(registerDto: RegisterDto) {
    return this.http.post(this.apiUrl + 'user/register', registerDto);
  }

  remove(id: number) {
    return this.http.delete<GetUserDto>(this.apiUrl + `user/${id}`);
  }
}
