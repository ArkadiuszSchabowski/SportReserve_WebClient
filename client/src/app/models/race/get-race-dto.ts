import { GetRaceTraceDto } from "./get-race-trace-dto";

export interface GetRaceDto {
    id: number;
    name: string;
    dateOfStart: string;
    description: string;
    posterUrl: string | null;
    entryFeeGBP: number | null;
    isRegistrationOpen: boolean;
    raceTraces: GetRaceTraceDto[];
}