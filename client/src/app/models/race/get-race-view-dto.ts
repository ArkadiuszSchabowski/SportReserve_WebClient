import { GetRaceTraceViewDto } from "./get-race-trace-view-dto";

export interface GetRaceViewDto {
    id: number;
    name: string;
    dateOfStart: string;
    description: string;
    posterUrl: string | null;
    entryFeeGBP: number | null;
    isRegistrationOpen: boolean;
    raceTraces: GetRaceTraceViewDto[];
}