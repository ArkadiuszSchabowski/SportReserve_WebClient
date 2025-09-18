import { FormControl } from '@angular/forms';

export interface ValentineRaceForm {
  race: FormControl<string | null>;
  raceTrace: FormControl<string | null>;
  valentineGadget: FormControl<string | null>;
  runType: FormControl<string | null>;
  wantsFinisherPhoto: FormControl<boolean | null>;
}
