export class UpdateRaceDto {
    name: string = '';
    dateOfStart: string = '';
    description: string = '';
    posterUrl: string | null = '';
    entryFeeGBP: number | null = null;
}