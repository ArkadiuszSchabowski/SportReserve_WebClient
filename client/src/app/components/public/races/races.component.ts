import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { RaceService } from 'src/app/_services/race.service';
import { environment } from 'src/app/environments/environment';
import { PaginationDto } from 'src/app/models/pagination/pagination-dto';
import { PaginationResult } from 'src/app/models/pagination/pagination-result';
import { GetRaceViewDto } from 'src/app/models/race/get-race-trace-view-dto';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
})
export class RacesComponent implements OnInit {
  currentUser: string | null = null;
  paginationDto: PaginationDto = new PaginationDto();
  paginationResult: PaginationResult<GetRaceViewDto> = new PaginationResult();
  serverUrl = environment.apiUrl;

  constructor(
    private authService: AuthService,
    private router: Router,
    private raceService: RaceService
  ) {}

  ngOnInit(): void {
    this.setUser();
    this.getRaces();
  }

  changePage(event: PageEvent) {
    console.log('changePage function');

    this.paginationDto.pageNumber = event.pageIndex + 1;
    this.paginationDto.pageSize = event.pageSize;

    this.raceService.get(this.paginationDto).subscribe({
      next: (response) => {
        this.paginationResult.results = response.results;
        this.paginationResult.totalCount = response.totalCount;
      },
      error: (error) => console.log(error),
    });
  }

  getRaces() {
    let dto = new PaginationDto();

    this.raceService.get(dto).subscribe({
      next: (response) => {
        console.log(response);
        this.paginationResult = response;
      },
      error: (error) => console.log(error),
    });
  }

  setUser() {
    this.authService.currentUser$.subscribe({
      next: (response) => {
        this.currentUser = response;
      },
    });
  }

  goToForm(url: string) {
    if (!this.currentUser) {
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl(`${url}`);
    }
  }
}