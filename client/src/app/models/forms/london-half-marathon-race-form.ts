import { FormControl } from '@angular/forms';

export interface LondonHalfMarathonRaceForm {
  race: FormControl<string | null>;
  raceTrace: FormControl<string | null>;
  tShirtSize: FormControl<string | null>;
  teamName: FormControl<string | null>;
  medalGratification: FormControl<boolean | null>;
}
