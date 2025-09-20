import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RaceService } from 'src/app/_services/race.service';
import { ReservationService } from 'src/app/_services/reservation.service';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';
import { environment } from 'src/app/environments/environment';
import { LondonHalfMarathonRaceForm } from 'src/app/models/forms/london-half-marathon-race-form';
import { UserInformationForm } from 'src/app/models/forms/user-information-form';
import { GetRaceTraceViewDto } from 'src/app/models/race/get-race-trace-view-dto';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';
import { LondonHalfMarathonReservationDto } from 'src/app/models/reservation/london-half-marathon-reservation-dto';
import { GetUserDto } from 'src/app/models/user/get-user-dto';

@Component({
  selector: 'app-london-run-form',
  templateUrl: './london-run-form.component.html',
  styleUrls: ['./london-run-form.component.scss'],
})
export class LondonRunFormComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService,
    private userService: UserService,
    private raceService: RaceService,
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  id: number | null = null;
  email: string = '';
  user: GetUserDto = new GetUserDto();
  isLinear: boolean = true;
  isTShirtSizeSelectVisibility: boolean = false;
  race: GetRaceViewDto = {} as GetRaceViewDto;
  raceIdString: string | null = '';
  raceUrl: string = environment.raceUrl;
  raceTraces: GetRaceTraceViewDto[] = [];

  personalInfoForm: FormGroup<UserInformationForm> = this.fb.group({
    email: [
      { value: '', disabled: true },
      [Validators.required, Validators.email],
    ],
    name: [
      { value: '', disabled: true },
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    surname: [
      { value: '', disabled: true },
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    gender: [{ value: '', disabled: true }, Validators.required],
    dateOfBirth: [{ value: '', disabled: true }, Validators.required],
  });

  raceInfoForm: FormGroup<LondonHalfMarathonRaceForm> = this.fb.group({
    race: [
      { value: '', viewValue: this.race.name, disabled: true },
      [Validators.required],
    ],
    raceTrace: ['', [Validators.required]],
    tShirtSize: [''],
    teamName: [''],
    medalGratification: [false],
  });

  tShirtSizes = [
    { value: 'small', viewValue: 'S' },
    { value: 'medium', viewValue: 'M' },
    { value: 'large', viewValue: 'L' },
    { value: 'extraLarge', viewValue: 'XL' },
  ];

  ngOnInit(): void {
    this.getRace();
    this.getProfileInformation();
  }

  getRace() {
    this.getRaceIdFromUrl();
    this.id = this.convertIdToNumber();
    this.raceService.getRaceWithId(this.id).subscribe({
      next: (response) => {
        this.race = response;
        this.raceTraces = response.raceTraces;
        this.raceInfoForm.controls.race.patchValue(this.race.name);
        this.raceInfoForm.controls.race.disable();
      },
    });
  }
  changeBooleanMedalGratification() {
    let currentValue = this.raceInfoForm.get('medalGratification')?.value;
    this.raceInfoForm.get('medalGratification')?.patchValue(!currentValue);
  }

  changeTShirtSizeSelectVisibility() {
    this.isTShirtSizeSelectVisibility = !this.isTShirtSizeSelectVisibility;
    this.raceInfoForm.controls.tShirtSize.reset();
  }
  convertIdToNumber(): number {
    return parseInt(this.raceIdString!.toString());
  }

  getRaceIdFromUrl() {
    this.raceIdString = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getProfileInformation() {
    this.email = this.tokenService.getEmailFromToken();

    this.userService.getUserByEmail(this.email).subscribe({
      next: (response) => {
        this.user = response;
        this.personalInfoForm.patchValue(this.user);
      },
    });
  }

  validateRaceInformation() {
    if (this.raceInfoForm.invalid) {
      this.raceInfoForm.markAllAsTouched();
      return;
    }
    this.stepper.next();
  }

  validatePersonalInformation() {
    if (this.personalInfoForm.invalid) {
      this.personalInfoForm.markAllAsTouched();
      return;
    }
  }

  sendReservation() {
    this.validatePersonalInformation();
    let dto: LondonHalfMarathonReservationDto = {
      userId: this.user.id,
      raceId: this.race.id,
      raceTraceId: parseFloat(this.raceInfoForm.value.raceTrace!),
      tShirtSize: this.raceInfoForm.value.tShirtSize!,
      teamName: this.raceInfoForm.value.teamName!,
      medalGratification: this.raceInfoForm.value.medalGratification!,
    };

    console.log(dto);

    this.reservationService
      .sendLondonHalfMarathonRaceReservation(dto)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/profile/reservations');
          this.toastr.success('Reserved successfully.');
        },
      });
  }
  get dateOfBirthError(): string | null {
    const control = this.personalInfoForm.get('dateOfBirth');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Date of birth is required.';
      }
    }
    return null;
  }

  get emailError(): string | null {
    const control = this.personalInfoForm.get('email');

    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Email address is required.';
      }
      if (control.errors['email']) {
        return 'Invalid email address format.';
      }
    }
    return null;
  }

  get genderError(): string | null {
    const control = this.personalInfoForm.get('gender');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'You must choose a gender.';
      }
    }
    return null;
  }

  get nameError(): string | null {
    const control = this.personalInfoForm.get('name');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'User name is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'User name must be between 3 and 25 characters.';
      }
    }
    return null;
  }

  get raceError(): string | null {
    const control = this.raceInfoForm.get('race');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Race is required.';
      }
    }
    return null;
  }

  get raceTraceError(): string | null {
    const control = this.raceInfoForm.get('raceTrace');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Race trace is required.';
      }
    }
    return null;
  }

  get surnameError(): string | null {
    const control = this.personalInfoForm.get('surname');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'User surname is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'User surname must be between 3 and 25 characters.';
      }
    }
    return null;
  }
  get teamNameError(): string | null {
    return null;
  }

  get tShirtSizeError(): string | null {
    return null;
  }
}
