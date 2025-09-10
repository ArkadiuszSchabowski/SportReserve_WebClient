import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GetRaceDto } from '../models/race/get-race-dto';
import { GetRaceViewDto } from '../models/race/get-race-view-dto';
import { Injectable } from '@angular/core';
import { PaginationDto } from '../models/pagination/pagination-dto';
import { PaginationResult } from '../models/pagination/pagination-result';
import { map, Observable } from 'rxjs';
import { AddRaceDto } from '../models/race/add-race-dto';
import { UpdateRaceDto } from '../models/race/update-race-dto';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddRaceDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.apiUrl + 'api/race', dto, { headers });
  }

  get(dto: PaginationDto): Observable<PaginationResult<GetRaceDto>> {
    let params = new HttpParams()
      .set('PageNumber', dto.pageNumber.toString())
      .set('PageSize', dto.pageSize.toString());
    return this.http.get<PaginationResult<GetRaceDto>>(
      this.apiUrl + 'api/race',
      { params }
    );
  }

  getRaceView(
    dto: PaginationDto
  ): Observable<PaginationResult<GetRaceViewDto>> {
    let params = new HttpParams()
      .set('PageNumber', dto.pageNumber.toString())
      .set('PageSize', dto.pageSize.toString());
    return this.http
      .get<PaginationResult<GetRaceDto>>(this.apiUrl + 'api/race', { params })
      .pipe(
        map((races) => {
          console.log(races);
          return {
            totalCount: races.totalCount,
            results: races.results.map((race) => {
              return {
                id: race.id,
                name: race.name,
                dateOfStart: race.dateOfStart,
                description: race.description,
                entryFeeGBP: race.entryFeeGBP,
                posterUrl: race.posterUrl,
                isRegistrationOpen: race.isRegistrationOpen,
                raceTraces: race.raceTraces.map((traces) => {
                  return {
                    hourOfStart: traces.hourOfStart,
                    id: traces.id,
                    slots: traces.slots,
                    details: `${traces.location} - ${traces.distanceKm} km`,
                  };
                }),
              };
            }),
          };
        })
      );
  }

  getRaceWithId(id: number): Observable<GetRaceViewDto> {
    return this.http.get<GetRaceDto>(this.apiUrl + `api/race/${id}`).pipe(
      map((race) => {
        return {
          id: race.id,
          name: race.name,
          dateOfStart: race.dateOfStart,
          description: race.description,
          entryFeeGBP: race.entryFeeGBP,
          posterUrl: race.posterUrl,
          isRegistrationOpen: race.isRegistrationOpen,
          raceTraces: race.raceTraces.map((traces) => {
            return {
              hourOfStart: traces.hourOfStart,
              id: traces.id,
              slots: traces.slots,
              details: `${traces.location} - ${traces.distanceKm} km`,
            };
          }),
        };
      })
    );
  }

  remove(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete(this.apiUrl + `api/race/${id}`, { headers });
  }

  update(id: number, dto: UpdateRaceDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put(this.apiUrl + `api/race/${id}`, dto, { headers });
  }
}
