import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RaceService } from 'src/app/_services/race.service';
import { ValidatorService } from 'src/app/_services/validator.service';
import { GetRaceDto } from 'src/app/models/race/get-race-dto';
import { UpdateRaceDto } from 'src/app/models/race/update-race-dto';

@Component({
  selector: 'app-dialog-update-race',
  templateUrl: './dialog-update-race.component.html',
  styleUrls: ['./dialog-update-race.component.scss'],
})
export class DialogUpdateRaceComponent implements OnInit {
  updateForm: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GetRaceDto,
    private fb: FormBuilder,
    private raceService: RaceService,
    private dialogRef: MatDialogRef<DialogUpdateRaceComponent>,
    private toastr: ToastrService,
    private validatorService: ValidatorService
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

  ngOnInit(): void {
    if (this.data) {
      this.patchRace();
    }
  }

  patchRace() {
    this.updateForm.patchValue(this.data);
  }
  updateRace() {
    if (this.updateForm.invalid) {
      this.updateForm.markAllAsTouched();
      return;
    }

    const dto: UpdateRaceDto = {
      name: this.updateForm.value.name,
      dateOfStart: this.updateForm.value.dateOfStart,
      entryFeeGBP: this.updateForm.value.entryFeeGBP,
      posterUrl: this.updateForm.value.posterUrl,
      description: this.updateForm.value.description,
    };

    this.raceService.update(this.data.id, dto).subscribe({
      next: () => {     
        this.toastr.success(`Race successfully updated.`);
        this.dialogRef.close(false);
      },
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
