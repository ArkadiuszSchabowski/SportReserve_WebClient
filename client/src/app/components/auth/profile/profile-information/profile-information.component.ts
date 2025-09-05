import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GetUserDto } from 'src/app/models/user/get-user-dto';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss'],
})
export class ProfileInformationComponent implements OnInit {
  email: string = '';
  user: GetUserDto = new GetUserDto();
  userForm = this.fb.group({
    name: new FormControl({ value: '', disabled: true }),
    surname: new FormControl({ value: '', disabled: true }),
    email: new FormControl({ value: '', disabled: true }),
    gender: new FormControl({ value: '', disabled: true }),
    dateOfBirth: new FormControl({ value: '', disabled: true }),
  });

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getProfileInformation();
  }

  getProfileInformation() {
    this.email = this.tokenService.getEmailFromToken();

    this.userService.getUserByEmail(this.email).subscribe({
      next: (response) => {
        this.user = response;
        this.userForm.patchValue(this.user);
      },
    });
  }
}
