import { AuthService } from 'src/app/_services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrls: ['./profile-navigation.component.scss'],
})
export class ProfileNavigationComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
