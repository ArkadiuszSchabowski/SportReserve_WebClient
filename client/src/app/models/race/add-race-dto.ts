export class AddRaceDto {
    name: string = '';
    dateOfStart: string = '';
    description: string = '';
    posterUrl: string | null = '';
    entryFeeGBP: number | null = null;
    isRegistrationOpen: boolean = false;
}