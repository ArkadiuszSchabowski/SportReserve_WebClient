import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RaceTraceService } from 'src/app/_services/race-trace.service';
import { ValidatorService } from 'src/app/_services/validator.service';
import { AddRaceTraceDto } from 'src/app/models/race/add-race-trace-dto';
import { GetRaceDto } from 'src/app/models/race/get-race-dto';
import { RegistrationOption } from 'src/app/models/registration-option';

@Component({
  selector: 'app-dialog-add-race-trace',
  templateUrl: './dialog-add-race-trace.component.html',
  styleUrls: ['./dialog-add-race-trace.component.scss'],
})
export class DialogAddRaceTraceComponent {
  form: any;
    registrationOption: RegistrationOption[] = [
    {value: false, viewValue: 'Close'},
    {value: true, viewValue: 'Open'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GetRaceDto,
    private fb: FormBuilder,
    private raceTraceService: RaceTraceService,
    private dialogRef: MatDialogRef<DialogAddRaceTraceComponent>,
    private validatorService: ValidatorService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      location: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      hourOfStart: ['', [Validators.required, validatorService.isTime]],
      distanceKm: [
        0,
        [Validators.required, Validators.min(0.1), Validators.max(200)],
      ],
      slots: null,
      isRegistrationOpen: [true],
    });
  }

  addRaceTrace() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dto: AddRaceTraceDto = {
      location: this.form.value.location,
      hourOfStart: this.form.value.hourOfStart,
      distanceKm: this.form.value.distanceKm,
      slots: this.form.value.slots,
      parentRaceId: this.data.id,
    };

    this.raceTraceService.add(dto).subscribe({
      next: () => {
        this.toastr.success(`Race trace successfully added.`);
        this.dialogRef.close(false);
      },
      error: (error) => this.toastr.error(error),
    });
  }
  get locationError(): string | null {
    const control = this.form.get('location');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Location is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'Location must be between 10 and 100 characters.';
      }
    }
    return null;
  }

  get hourOfStartError(): string | null {
    const control = this.form.get('hourOfStart');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Hour of start is required.';
      }
      if (control.errors['invalidTime']) {
        return 'Invalid time format. Expected format is HH:mm:ss.';
      }
    }
    return null;
  }
  get distanceKmError(): string | null {
    const control = this.form.get('distanceKm');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Distance is required.';
      }
      if (control.errors['min'] || control.errors['max']) {
        return 'Race distance must be between 0.1km and 200km.';
      }
    }
    return null;
  }

  get slotsError(): string | null {
    return null;
  }
}
