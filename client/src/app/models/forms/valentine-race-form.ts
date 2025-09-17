import { FormControl } from "@angular/forms";

export interface ValentineRaceForm {
      valentineGadget: FormControl<string | null>;
      runType: FormControl<string | null>;
      wantsFinisherPhoto: FormControl<boolean | null>;
}