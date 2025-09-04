import { AuthService } from 'src/app/_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  role: string | null = null;

  constructor(
    public authService: AuthService,
    public tokenService: TokenService
  ) {}
  ngOnInit(): void {
    this.setRole();
  }
  setRole() {
    this.authService.setRole();
  }
}
