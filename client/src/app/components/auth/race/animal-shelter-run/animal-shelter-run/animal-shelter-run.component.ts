import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-animal-shelter-run',
  templateUrl: './animal-shelter-run.component.html',
  styleUrls: ['./animal-shelter-run.component.scss'],
})
export class AnimalShelterRunComponent {
  currentUser: string | null = null;
  constructor(private authService: AuthService, private router: Router) {
    this.setUser();
  }
  setUser() {
    this.authService.currentUser$.subscribe({
      next: response => {
        this.currentUser = response;
      },
    });
  }
  goToForm() {
    if (!this.currentUser) {
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl('race-for-the-animal-shelter/form');
    }
  }
}
