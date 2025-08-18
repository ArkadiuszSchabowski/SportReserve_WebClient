export class GetRaceTraceDto {
    id: number = 0;
    location: string = '';
    hourOfStart: string = '';
    distanceKm: number = 0;
    slots: number | null = null;
    isRegistrationOpen: boolean = true;
}