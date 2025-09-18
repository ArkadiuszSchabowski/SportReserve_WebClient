import { FormControl } from "@angular/forms";

export interface AnimalShelterRaceForm {
  race: FormControl<string | null>;
  raceTrace: FormControl<string | null>;
  dogSize: FormControl<string | null>;
  emergencyContact: FormControl<string | null>;
  donationAmount: FormControl<number | null>;
}