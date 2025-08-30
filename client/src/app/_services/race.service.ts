import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetRaceDto } from '../models/race/get-race-dto';
import { GetRaceViewDto } from '../models/race/get-race-view-dto';
import { Injectable } from '@angular/core';
import { PaginationDto } from '../models/pagination/pagination-dto';
import { PaginationResult } from '../models/pagination/pagination-result';
import { map, Observable } from 'rxjs';
import { AddRaceDto } from '../models/race/add-race-dto';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddRaceDto){
    return this.http.post(this.apiUrl + 'api/race', dto)
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
                raceTraces: race.raceTraces.map((traces) => {
                  return {
                    hourOfStart: traces.hourOfStart,
                    id: traces.id,
                    isRegistrationOpen: traces.isRegistrationOpen,
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

  remove(id: number) {
    return this.http.delete(this.apiUrl + `api/race/${id}`);
  }

  update(id: number, dto: AddRaceDto){
    return this.http.put(this.apiUrl + `api/race/${id}`, dto);
  }
}
