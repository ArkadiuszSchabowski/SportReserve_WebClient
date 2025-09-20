import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/_services/reservation.service';

@Component({
  selector: 'app-profile-reservations',
  templateUrl: './profile-reservations.component.html',
  styleUrls: ['./profile-reservations.component.scss'],
})
export class ProfileReservationsComponent implements OnInit{
  reservations: any;

  constructor(private reservationService: ReservationService){

  }

  ngOnInit(): void {
    this.get();
  }
  
  get() {
    this.reservationService.get().subscribe({
      next: response => {
        console.log(response)
        this.reservations = response
      },
    })
  }
}
