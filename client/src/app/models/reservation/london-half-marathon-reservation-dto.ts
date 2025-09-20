import { ReservationBase } from "./base/reservation-base";

export interface LondonHalfMarathonReservationDto extends ReservationBase {
    tShirtSize: string | null;
    teamName: string | null;
    medalGratification: boolean;
}