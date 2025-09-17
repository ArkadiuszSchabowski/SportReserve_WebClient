import { FormControl } from "@angular/forms";

export interface UserInformationForm {
  email: FormControl<string | null>;
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  gender: FormControl<string | null>;
  dateOfBirth: FormControl<string | null>;
}