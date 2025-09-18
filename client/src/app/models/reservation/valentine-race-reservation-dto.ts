import { ReservationBase } from "./base/reservation-base";

export class ValentineRaceReservationDto extends ReservationBase {
    valentineGadget: string = '';
    runType: string = '';
    wantsFinisherPhoto: boolean = false;
}