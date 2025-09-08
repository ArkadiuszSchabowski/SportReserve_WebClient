import { AuthService } from 'src/app/_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';
import { PageEvent } from '@angular/material/paginator';
import { PaginationDto } from 'src/app/models/pagination/pagination-dto';
import { PaginationResult } from 'src/app/models/pagination/pagination-result';
import { RaceService } from 'src/app/_services/race.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
})
export class RacesComponent implements OnInit {
  currentUser: string | null = null;
  paginationDto: PaginationDto = new PaginationDto();
  paginationResult: PaginationResult<GetRaceViewDto> = new PaginationResult();
  raceUrl = environment.raceUrl;

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
    this.paginationDto.pageNumber = event.pageIndex + 1;
    this.paginationDto.pageSize = event.pageSize;

    this.raceService.getRaceView(this.paginationDto).subscribe({
      next: (response) => {
        this.paginationResult.results = response.results;
        this.paginationResult.totalCount = response.totalCount;
      },
    });
  }
  handleRace(race: GetRaceViewDto){
    var url = this.createSlug(`race/${race.id}`)
    this.goToRaceView(url);
  }

  createSlug(text: string): string {
    return text.toLowerCase().trim().replace(/ /g, '-');
  }

  getRaces() {
    let dto = new PaginationDto();

    this.raceService.getRaceView(dto).subscribe({
      next: (response) => {
        this.paginationResult = response;
      },
    });
  }

  goToRaceView(url: string) {
    if (!this.currentUser) {
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl(`${url}`);
    }
  }

  setUser() {
    this.authService.currentUser$.subscribe({
      next: (response) => {
        this.currentUser = response;
      },
    });
  }
}
