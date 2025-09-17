import { ReservationBase } from "./base/reservation-base";

export class AnimalShelterRaceReservationDto extends ReservationBase {
    dogSize: string | null = null;
    donationAmount: number | null = null;
    emergencyContact: string = '';
}