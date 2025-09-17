import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LondonHalfMarathonRaceForm } from 'src/app/models/forms/london-half-marathon-race-form';
import { UserInformationForm } from 'src/app/models/forms/user-information-form';

@Component({
  selector: 'app-london-run-form',
  templateUrl: './london-run-form.component.html',
  styleUrls: ['./london-run-form.component.scss'],
})
export class LondonRunFormComponent {
  constructor(private fb: FormBuilder) {}

  personalInfoForm: FormGroup<UserInformationForm> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    surname: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    gender: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
  });

    raceInfoForm: FormGroup<LondonHalfMarathonRaceForm> = this.fb.group({
      tShirtSize: [''],
      teamName: [''],
      medalGratification: [false]
    });
}
