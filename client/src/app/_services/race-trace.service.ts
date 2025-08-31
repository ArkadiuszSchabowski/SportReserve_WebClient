import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AddRaceTraceDto } from '../models/race/add-race-trace-dto';

@Injectable({
  providedIn: 'root'
})
export class RaceTraceService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddRaceTraceDto){
    return this.http.post(this.apiUrl + 'api/racetrace', dto)
  }
}
