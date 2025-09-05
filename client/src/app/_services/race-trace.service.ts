import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AddRaceTraceDto } from '../models/race/add-race-trace-dto';

@Injectable({
  providedIn: 'root',
})
export class RaceTraceService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddRaceTraceDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.apiUrl + 'api/racetrace', dto, {headers});
  }
  remove(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete(this.apiUrl + `api/racetrace/${id}`, {headers});
  }
}
