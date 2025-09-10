import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RaceService } from 'src/app/_services/race.service';
import { ValidatorService } from 'src/app/_services/validator.service';
import { AddRaceDto } from 'src/app/models/race/add-race-dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog-add-race',
  templateUrl: './dialog-add-race.component.html',
  styleUrls: ['./dialog-add-race.component.scss']
})
export class DialogAddRaceComponent {
    form: any;
  
    constructor(
      private fb: FormBuilder,
      private raceService: RaceService,
      private dialogRef: MatDialogRef<DialogAddRaceComponent>,
      private validatorService: ValidatorService,
      private toastr: ToastrService
    ) {
      this.form = this.fb.group({
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100),
          ],
        ],
        dateOfStart: [
          '',
          [
            Validators.required,
            validatorService.raceStartDateValidator(),
            validatorService.isDate,
          ],
        ],
        entryFeeGBP: null,
        posterUrl: '',
        description: [
          '',
          [
            Validators.required,
            Validators.minLength(400),
            Validators.maxLength(1000),
          ],
        ],
      });
    }
    addRace() {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
  
      const dto: AddRaceDto = {
        name: this.form.value.name,
        dateOfStart: this.form.value.dateOfStart,
        entryFeeGBP: this.form.value.entryFeeGBP,
        posterUrl: this.form.value.posterUrl,
        description: this.form.value.description,
        isRegistrationOpen: this.form.isRegistrationOpen
      };
  
      this.raceService.add(dto).subscribe({
        next: () => {
          this.toastr.success(`Race successfully added.`);
          this.dialogRef.close(false);
        },
        error: (error) => this.toastr.error(error.error.message)
      });
    }
    get dateOfStartError(): string | null {
      const control = this.form.get('dateOfStart');
      if (control && control.touched && control.errors) {
        if (control.errors['required']) {
          return 'Date of start is required.';
        }
        if (control.errors['pastDate']) {
          return 'Race start date cannot be in the past.';
        }
        if (control.errors['futureDate']) {
          return 'Race start date is after the allowed maximum date of 2035-01-01.';
        }
        if (control.errors['invalidDate']) {
          return 'Invalid date format.';
        }
      }
      return null;
    }
  
    get descriptionError(): string | null {
      const control = this.form.get('description');
      if (control && control.touched && control.errors) {
        if (control.errors['required']) {
          return 'Description is required.';
        }
        if (control.errors['minlength'] || control.errors['maxlength']) {
          return 'Description must be between 400 and 1000 characters.';
        }
      }
      return null;
    }
    get entryFeeError(): string | null {
      return null;
    }
    get nameError(): string | null {
      const control = this.form.get('name');
      if (control && control.touched && control.errors) {
        if (control.errors['required']) {
          return 'Race name is required.';
        }
        if (control.errors['minlength'] || control.errors['maxlength']) {
          return 'Race name must be between 5 and 100 characters.';
        }
      }
      return null;
    }
    get posterUrlError(): string | null {
      return null;
    }
}
