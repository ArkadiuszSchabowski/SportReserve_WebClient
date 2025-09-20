import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ReservationService } from 'src/app/_services/reservation.service';
import { PaginationDto } from 'src/app/models/pagination/pagination-dto';
import { PaginationResult } from 'src/app/models/pagination/pagination-result';
import { ReservationBase } from 'src/app/models/reservation/base/reservation-base';

@Component({
  selector: 'app-profile-reservations',
  templateUrl: './profile-reservations.component.html',
  styleUrls: ['./profile-reservations.component.scss'],
})
export class ProfileReservationsComponent implements OnInit {
  paginationResult: any = null;
  dto: PaginationDto = new PaginationDto();

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.get();
  }
    changePage(event: PageEvent) {
      this.dto.pageNumber = event.pageIndex + 1;
      this.dto.pageSize = event.pageSize;
  
      this.reservationService.get(this.dto).subscribe({
        next: (response) => {
          console.log(response)
          this.paginationResult.results = response.results;
          this.paginationResult.totalCount = response.totalCount;
        },
      });
    }

  get() {
    this.reservationService.get(this.dto).subscribe({
      next: (response) => {
        if (response) {
          this.paginationResult = response;
          console.log(response);
        }
      },
    });
  }
}
