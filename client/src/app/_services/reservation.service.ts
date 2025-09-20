import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnimalShelterRaceReservationDto } from '../models/reservation/animal-shelter-race-reservation-dto';
import { ValentineRaceReservationDto } from '../models/reservation/valentine-race-reservation-dto';
import { LondonHalfMarathonReservationDto } from '../models/reservation/london-half-marathon-reservation-dto';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  reservationUrl = environment.reservationUrl;
  userId: number | null = null;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  get(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.reservationUrl + `api/reservation`, {headers})
  }

  sendAnimalShelterRaceReservation(dto: AnimalShelterRaceReservationDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(
      this.reservationUrl + 'api/reservation/animal-shelter-race',
      dto,
      { headers }
    );
  }
  sendValentineRaceReservation(dto: ValentineRaceReservationDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(
      this.reservationUrl + 'api/reservation/valentine-race',
      dto,
      { headers }
    );
  }
  sendLondonHalfMarathonRaceReservation(dto: LondonHalfMarathonReservationDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post(
      this.reservationUrl + 'api/reservation/london-half-marathon-race',
      dto,
      { headers }
    );
  }
}
