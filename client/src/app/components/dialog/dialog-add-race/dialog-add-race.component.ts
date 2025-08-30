import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RaceService } from 'src/app/_services/race.service';
import { ValidatorService } from 'src/app/_services/validator.service';
import { AddRaceDto } from 'src/app/models/race/add-race-dto';
import { DialogUpdateRaceComponent } from '../dialog-update-race/dialog-update-race.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog-add-race',
  templateUrl: './dialog-add-race.component.html',
  styleUrls: ['./dialog-add-race.component.scss']
})
export class DialogAddRaceComponent {
    updateForm: any;
  
    constructor(
      private fb: FormBuilder,
      private raceService: RaceService,
      private dialogRef: MatDialogRef<DialogUpdateRaceComponent>,
      private validatorService: ValidatorService,
      private toastr: ToastrService
    ) {
      this.updateForm = this.fb.group({
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
      if (this.updateForm.invalid) {
        this.updateForm.markAllAsTouched();
        return;
      }
  
      const dto: AddRaceDto = {
        name: this.updateForm.value.name,
        dateOfStart: this.updateForm.value.dateOfStart,
        entryFeeGBP: this.updateForm.value.entryFeeGBP,
        posterUrl: this.updateForm.value.posterUrl,
        description: this.updateForm.value.description,
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
      const control = this.updateForm.get('dateOfStart');
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
      const control = this.updateForm.get('description');
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
      const control = this.updateForm.get('name');
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
