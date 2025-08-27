import { Component, OnInit } from '@angular/core';
import { DialogRemoveRaceComponent } from '../../dialog/dialog-remove-race/dialog-remove-race.component';
import { FormBuilder } from '@angular/forms';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PaginationDto } from 'src/app/models/pagination/pagination-dto';
import { PaginationResult } from 'src/app/models/pagination/pagination-result';
import { RaceService } from 'src/app/_services/race.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-moderator-panel-races',
  templateUrl: './moderator-panel-races.component.html',
  styleUrls: ['./moderator-panel-races.component.scss'],
})
export class ModeratorPanelRacesComponent implements OnInit {
  paginationResult: PaginationResult<GetRaceViewDto> = new PaginationResult();
  allRacesResult: PaginationResult<GetRaceViewDto> = new PaginationResult();
  paginationDto: PaginationDto = new PaginationDto();
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private raceService: RaceService,
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
        console.log(response);
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

  filterRaces(searchText: string | null) {
    if (!searchText) {
      this.paginationResult.results = this.allRacesResult.results.slice();
      return;
    }

    const filteredText = searchText.toLowerCase().trim();

    console.log(this.allRacesResult.results);

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
      error: (error) => console.log(error),
    });
  }

  openDialog(race: GetRaceViewDto) {
    let dialogRef = this.dialog.open(DialogRemoveRaceComponent, { data: race });

    dialogRef.afterClosed().subscribe({
      next: (response) => {
        console.log(response);
        if (response == true) {
          this.deleteRace(race.id);
        }
      },
    });
  }

  setInitPageSize() {
    this.paginationDto.pageSize = 100;
  }
}
