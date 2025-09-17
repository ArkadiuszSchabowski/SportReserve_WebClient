import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInformationForm } from 'src/app/models/forms/user-information-form';
import { ValentineRaceForm } from 'src/app/models/forms/valentine-race-form';

@Component({
  selector: 'app-valentine-run-form',
  templateUrl: './valentine-run-form.component.html',
  styleUrls: ['./valentine-run-form.component.scss'],
})
export class ValentineRunFormComponent {
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

  raceInfoForm: FormGroup<ValentineRaceForm> = this.fb.group({
    runType: [''],
    valentineGadget: [''],
    wantsFinisherPhoto: [false],
  });
}