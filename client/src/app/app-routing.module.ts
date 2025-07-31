import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unauthGuard } from './guards/unauth.guard';
import { ContactComponent } from './components/public/contact/contact.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { ProfileInformationComponent } from './components/auth/profile-information/profile-information.component';
import { ProfileNavigationComponent } from './components/auth/profile-navigation/profile-navigation.component';
import { ProfileReservationsComponent } from './components/auth/profile-reservations/profile-reservations.component';
import { RacesComponent } from './components/public/races/races.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'races', component: RacesComponent },
  {
    path: 'profile',
    component: ProfileNavigationComponent,
    canActivate: [authGuard],
    children: [
      { path: 'information', component: ProfileInformationComponent },
      { path: 'reservations', component: ProfileReservationsComponent },
    ],
  },
  {
    path: '',
    canActivate: [unauthGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
