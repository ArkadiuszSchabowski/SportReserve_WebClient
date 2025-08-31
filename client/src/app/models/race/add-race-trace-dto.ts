export class AddRaceTraceDto {
    location: string = '';
    hourOfStart: string = '';
    distanceKm: number = 0;
    slots: number | null = null;
    isRegistrationOpen: boolean = true;
    parentRaceId: number | null = null;
}