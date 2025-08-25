export class GetRaceTraceViewDto {
    id: number = 0;
    hourOfStart: string = '';
    slots: number | null = null;
    isRegistrationOpen: boolean = true;
    details: string = '';
}