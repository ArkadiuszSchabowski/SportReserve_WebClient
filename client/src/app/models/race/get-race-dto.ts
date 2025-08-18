import { GetRaceTraceDto } from "./get-race-trace-dto";

export class GetRaceDto {
    id: number = 0;
    name: string = '';
    dateOfStart: string = '';
    description: string = '';
    posterUrl: string | null = null;
    entryFeeGBP: number | null = null;
    raceTraces: GetRaceTraceDto[] = [];
}