import { Component, OnInit, ViewChild } from '@angular/core';
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
import { AnimalShelterRaceForm } from 'src/app/models/forms/animal-shelter-race-form';
import { UserInformationForm } from 'src/app/models/forms/user-information-form';
import { GetRaceTraceViewDto } from 'src/app/models/race/get-race-trace-view-dto';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';
import { AnimalShelterRaceReservationDto } from 'src/app/models/reservation/animal-shelter-race-reservation-dto';
import { GetUserDto } from 'src/app/models/user/get-user-dto';

@Component({
  selector: 'app-animal-shelter-run-form',
  templateUrl: './animal-shelter-run-form.component.html',
  styleUrls: ['./animal-shelter-run-form.component.scss'],
})
export class AnimalShelterRunFormComponent implements OnInit {
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
  isShelterDogSelectVisibility: boolean = false;
  isDonationAmountSelectVisibility: boolean = false;
  race: GetRaceViewDto = {} as GetRaceViewDto;
  raceIdString: string | null = '';
  raceUrl: string = environment.raceUrl;

  FLEXIBLE_PHONE_NUMBER_REGEX =
    /^\+?(\d{2})?[-\s]?\d{3}[-\s]?\d{3}[-\s]?\d{3}$/;

  raceTraces: GetRaceTraceViewDto[] = [];
  dogSizes = [
    { value: 'small', viewValue: 'Small' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'big', viewValue: 'Big' },
  ];

  raceInfoForm: FormGroup<AnimalShelterRaceForm> = this.fb.group({
    race: [{ value: '', disabled: true }, [Validators.required]],
    raceTrace: ['', [Validators.required]],
    dogSize: [''],
    emergencyContact: [
      '',
      [
        Validators.required,
        Validators.pattern(this.FLEXIBLE_PHONE_NUMBER_REGEX),
      ],
    ],
    donationAmount: [0, [Validators.min(0), Validators.max(1000000)]],
  });

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

  changeShelterDogSelectVisibility() {
    this.isShelterDogSelectVisibility = !this.isShelterDogSelectVisibility;
    this.raceInfoForm.controls.dogSize.reset();
  }
  changeDonationAmountSelectVisibility() {
    this.isDonationAmountSelectVisibility =
      !this.isDonationAmountSelectVisibility;
    this.raceInfoForm.controls.donationAmount.reset();
  }

  validateRaceInformation() {
    if (this.raceInfoForm.invalid) {
      this.raceInfoForm.markAllAsTouched();
      return;
    }
    console.log(this.raceInfoForm.controls);
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

    let dto: AnimalShelterRaceReservationDto = {
      userId: this.user.id,
      raceId: this.race.id,
      raceTraceId: parseFloat(this.raceInfoForm.value.raceTrace!),
      dogSize: this.raceInfoForm.value.dogSize!,
      donationAmount: this.raceInfoForm.value.donationAmount!,
      emergencyContact: this.raceInfoForm.value.emergencyContact!,
    };

    this.reservationService.sendAnimalShelterRaceReservation(dto).subscribe({
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

  get donationAmountError(): string | null {
    const control = this.raceInfoForm.get('donationAmount');

    if (control && control.touched && control.errors) {
      if (control.errors['min']) {
        return 'Please enter a positive number.';
      }
      if (control.errors['max']) {
        return 'Please enter a value up to 1,000,000 GBP.';
      }
    }
    return null;
  }

  get emergencyContactError(): string | null {
    const control = this.raceInfoForm.get('emergencyContact');

    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Emergency contact is required.';
      }
      if (control.errors['pattern']) {
        return 'Invalid phone number.';
      }
    }
    return null;
  }

  get dogSizeError(): string | null {
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
}
