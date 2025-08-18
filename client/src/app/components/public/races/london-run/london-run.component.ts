import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-london-run',
  templateUrl: './london-run.component.html',
  styleUrls: ['./london-run.component.scss'],
})
export class LondonRunComponent implements OnInit {
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
      this.router.navigateByUrl('london-half-marathon-race/form');
    }
  }
}
