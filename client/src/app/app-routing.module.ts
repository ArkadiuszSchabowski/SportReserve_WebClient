import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unauthGuard } from './guards/unauth.guard';
import { ContactComponent } from './components/public/contact/contact.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { ProfileInformationComponent } from './components/auth/profile/profile-information/profile-information.component';
import { ProfileNavigationComponent } from './components/auth/profile/profile-navigation/profile-navigation.component';
import { ProfileReservationsComponent } from './components/auth/profile/profile-reservations/profile-reservations.component';
import { RacesComponent } from './components/public/races/races.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AnimalShelterRunComponent } from './components/auth/race/animal-shelter-run/animal-shelter-run/animal-shelter-run.component';
import { LondonRunComponent } from './components/auth/race/london-run/london-run/london-run.component';
import { ValentineRunComponent } from './components/auth/race/valentine-run/valentine-run/valentine-run.component';
import { AnimalShelterRunFormComponent } from './components/auth/race/animal-shelter-run/animal-shelter-run-form/animal-shelter-run-form.component';
import { ValentineRunFormComponent } from './components/auth/race/valentine-run/valentine-run-form/valentine-run-form.component';
import { LondonRunFormComponent } from './components/auth/race/london-run/london-run-form/london-run-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'races',
    component: RacesComponent,
    children: [
      {
        path: 'race-for-the-animal-shelter',
        component: AnimalShelterRunComponent,
      },
      { path: 'valentine-race-with-heart', component: ValentineRunComponent },
      { path: 'london-half-marathon-race', component: LondonRunComponent },
    ],
  },
  {
    path: 'race-for-the-animal-shelter/form',
    component: AnimalShelterRunFormComponent,
    canActivate: [authGuard],
  },
  {
    path: 'valentine-race-with-heart/form',
    component: ValentineRunFormComponent,
    canActivate: [authGuard],
  },
  {
    path: 'london-half-marathon-race/form',
    component: LondonRunFormComponent,
    canActivate: [authGuard],
  },
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
