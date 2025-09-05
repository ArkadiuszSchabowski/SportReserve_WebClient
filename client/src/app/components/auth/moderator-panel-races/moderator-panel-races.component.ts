import { Component, OnInit } from '@angular/core';
import { DialogRemoveRaceComponent } from '../../dialog/dialog-remove-race/dialog-remove-race.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PaginationDto } from 'src/app/models/pagination/pagination-dto';
import { PaginationResult } from 'src/app/models/pagination/pagination-result';
import { RaceService } from 'src/app/_services/race.service';
import { ToastrService } from 'ngx-toastr';
import { DialogUpdateRaceComponent } from '../../dialog/dialog-update-race/dialog-update-race.component';
import { environment } from 'src/app/environments/environment';
import { GetRaceDto } from 'src/app/models/race/get-race-dto';
import { DialogAddRaceComponent } from '../../dialog/dialog-add-race/dialog-add-race.component';
import { DialogAddRaceTraceComponent } from '../../dialog/dialog-add-race-trace/dialog-add-race-trace.component';
import { GetRaceTraceDto } from 'src/app/models/race/get-race-trace-dto';
import { RaceTraceService } from 'src/app/_services/race-trace.service';
import { DialogRemoveRaceTraceComponent } from '../../dialog/dialog-remove-race-trace/dialog-remove-race-trace.component';

@Component({
  selector: 'app-moderator-panel-races',
  templateUrl: './moderator-panel-races.component.html',
  styleUrls: ['./moderator-panel-races.component.scss'],
})
export class ModeratorPanelRacesComponent implements OnInit {
  paginationResult: PaginationResult<GetRaceDto> = new PaginationResult();
  allRacesResult: PaginationResult<GetRaceDto> = new PaginationResult();
  paginationDto: PaginationDto = new PaginationDto();
  raceUrl = environment.raceUrl;
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private raceService: RaceService,
    private raceTraceService: RaceTraceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.setInitPageSize();
    this.getRaces();
    this.filterRacesWhenValueChanges();
  }

  changePage(event: PageEvent) {
    this.paginationDto.pageNumber = event.pageIndex + 1;
    this.paginationDto.pageSize = event.pageSize;

    this.raceService.get(this.paginationDto).subscribe({
      next: (response) => {
        this.paginationResult.results = response.results;
        this.paginationResult.totalCount = response.totalCount;
        this.allRacesResult.results = response.results.slice();
      },
      error: (error) => console.log(error),
    });
  }

  deleteRace(id: number) {
    this.raceService.remove(id).subscribe({
      next: () => {
        this.toastr.success(`Race (ID: ${id}) successfully removed.`);
        this.getRaces();
      },
    });
  }

    deleteTrace(id: number) {
    this.raceTraceService.remove(id).subscribe({
      next: () => {
        this.toastr.success(`Trace (ID: ${id}) successfully removed.`);
        this.getRaces();
      },
    });
  }

  filterRaces(searchText: string | null) {
    if (!searchText) {
      this.paginationResult.results = this.allRacesResult.results.slice();
      return;
    }

    const filteredText = searchText.toLowerCase().trim();

    this.paginationResult.results = this.allRacesResult.results.filter(
      (race) =>
        race.id.toString().includes(filteredText) ||
        race.name.toString().toLowerCase().includes(filteredText) ||
        race.dateOfStart.toLowerCase().includes(filteredText)
    );
  }

  filterRacesWhenValueChanges() {
    this.searchForm.get('searchValue')?.valueChanges.subscribe((value) => {
      this.filterRaces(value);
    });
  }

  getRaces() {
    this.raceService.get(this.paginationDto).subscribe({
      next: (response) => {
        this.paginationResult = response;

        this.allRacesResult.results = response.results.slice();
        this.allRacesResult.totalCount = response.totalCount;
      },
    });
  }
  openDialogAddRace() {
    let dialogRef = this.dialog.open(DialogAddRaceComponent);

    dialogRef.afterClosed().subscribe({
      next: () => {},
    }),
      this.raceService.get(this.paginationDto).subscribe({
        next: (response) => {
          this.paginationResult = response;

          this.allRacesResult.results = response.results.slice();
          this.allRacesResult.totalCount = response.totalCount;
        },
      });
  }

  openDialogAddRaceTrace(race: GetRaceDto) {
    let dialogRef = this.dialog.open(DialogAddRaceTraceComponent, {
      data: race,
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.raceService.get(this.paginationDto).subscribe({
          next: (response) => {
            this.paginationResult = response;

            this.allRacesResult.results = response.results.slice();
            this.allRacesResult.totalCount = response.totalCount;
          },
        });
      },
    });
  }

  openDialogRemove(race: GetRaceDto) {
    let dialogRef = this.dialog.open(DialogRemoveRaceComponent, { data: race });

    dialogRef.afterClosed().subscribe({
      next: (response) => {
        if (response == true) {
          this.deleteRace(race.id);
        }
      },
    });
  }

    openDialogRemoveRaceTrace(trace: GetRaceTraceDto) {
    let dialogRef = this.dialog.open(DialogRemoveRaceTraceComponent, { data: trace });

    dialogRef.afterClosed().subscribe({
      next: (response) => {
        if (response == true) {
          this.deleteTrace(trace.id);
        }
      },
    });
  }

  openDialogUpdate(race: GetRaceDto) {
    let dialogRef = this.dialog.open(DialogUpdateRaceComponent, { data: race });

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.raceService.get(this.paginationDto).subscribe({
          next: (response) => {
            this.paginationResult = response;

            this.allRacesResult.results = response.results.slice();
            this.allRacesResult.totalCount = response.totalCount;
          },
        });
      },
    });
  }

  setInitPageSize() {
    this.paginationDto.pageSize = 100;
  }
}
