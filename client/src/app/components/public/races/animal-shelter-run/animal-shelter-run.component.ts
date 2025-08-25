import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-animal-shelter-run',
  templateUrl: './animal-shelter-run.component.html',
  styleUrls: ['./animal-shelter-run.component.scss'],
})
export class AnimalShelterRunComponent implements OnInit {
  currentUser: string | null = null;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.setUser();
  }
  setUser() {
    this.authService.currentUser$.subscribe({
      next: (response) => {
        this.currentUser = response;
      },
    });
  }
  goToForm() {
    if (!this.currentUser) {
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl('run-for-the-animal-shelter/form');
    }
  }
}
