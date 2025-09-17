import { FormControl } from '@angular/forms';

export interface LondonHalfMarathonRaceForm {
  tShirtSize: FormControl<string | null>;
  teamName: FormControl<string | null>;
  medalGratification: FormControl<boolean | null>;
}
