import { GetRaceTraceViewDto } from "./get-race-view-dto";

export class GetRaceViewDto {
    id: number = 0;
    name: string = '';
    dateOfStart: string = '';
    description: string = '';
    posterUrl: string | null = null;
    entryFeeGBP: number | null = null;
    raceTraces: GetRaceTraceViewDto[] = [];
}