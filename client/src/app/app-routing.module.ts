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

import { AnimalShelterRunFormComponent } from './components/auth/race/animal-shelter-run-form/animal-shelter-run-form.component';
import { ValentineRunFormComponent } from './components/auth/race/valentine-run-form/valentine-run-form.component';
import { LondonRunFormComponent } from './components/auth/race/london-run-form/london-run-form.component';
import { ModeratorPanelComponent } from './components/auth/moderator-panel/moderator-panel.component';
import { ModeratorPanelRacesComponent } from './components/auth/moderator-panel-races/moderator-panel-races.component';
import { ModeratorPanelUsersComponent } from './components/auth/moderator-panel-users/moderator-panel-users.component';
import { moderatorGuard } from './guards/moderator.guard';
import { adminGuard } from './guards/admin.guard';
import { RaceIdViewComponent } from './components/public/races/race-id-view/race-id-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'races', component: RacesComponent },
  { path: 'race/:id', component: RaceIdViewComponent },
  {
    path: 'moderator-panel',
    component: ModeratorPanelComponent,
    canActivate: [moderatorGuard],
  },

  {
    path: 'moderator-panel-users',
    component: ModeratorPanelUsersComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'moderator-panel-races',
    component: ModeratorPanelRacesComponent,
    canActivate: [moderatorGuard],
  },
  {
    path: 'run-for-the-animal-shelter/form/:id',
    component: AnimalShelterRunFormComponent,
    canActivate: [authGuard],
  },
  {
    path: 'valentine-race-with-heart/form/:id',
    component: ValentineRunFormComponent,
    canActivate: [authGuard],
  },
  {
    path: 'london-half-marathon-race/form/:id',
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
  { path: 'login', component: LoginComponent, canActivate: [unauthGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [unauthGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
