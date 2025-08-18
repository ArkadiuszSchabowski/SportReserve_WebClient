import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-valentine-run',
  templateUrl: './valentine-run.component.html',
  styleUrls: ['./valentine-run.component.scss'],
})
export class ValentineRunComponent implements OnInit {
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
      this.router.navigateByUrl('valentine-race-with-heart/form');
    }
  }
}
