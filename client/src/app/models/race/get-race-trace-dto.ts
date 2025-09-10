export interface GetRaceTraceDto {
    id: number;
    location: string;
    hourOfStart: string;
    distanceKm: number;
    slots: number | null;
}