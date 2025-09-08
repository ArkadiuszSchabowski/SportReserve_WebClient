import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProfileInformationComponent } from 'src/app/components/auth/profile/profile-information/profile-information.component';
import { ProfileNavigationComponent } from 'src/app/components/auth/profile/profile-navigation/profile-navigation.component';
import { ProfileReservationsComponent } from 'src/app/components/auth/profile/profile-reservations/profile-reservations.component';
import { AnimalShelterRunFormComponent } from 'src/app/components/auth/race/animal-shelter-run-form/animal-shelter-run-form.component';
import { LondonRunFormComponent } from 'src/app/components/auth/race/london-run-form/london-run-form.component';
import { ValentineRunFormComponent } from 'src/app/components/auth/race/valentine-run-form/valentine-run-form.component';
import { ModeratorPanelComponent } from 'src/app/components/auth/moderator-panel/moderator-panel.component';
import { ModeratorPanelRacesComponent } from 'src/app/components/auth/moderator-panel-races/moderator-panel-races.component';
import { ModeratorPanelUsersComponent } from 'src/app/components/auth/moderator-panel-users/moderator-panel-users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileInformationComponent,
    ProfileNavigationComponent,
    ProfileReservationsComponent,
    AnimalShelterRunFormComponent,
    LondonRunFormComponent,
    ValentineRunFormComponent,
    ModeratorPanelComponent,
    ModeratorPanelUsersComponent,
    ModeratorPanelRacesComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class AuthModule {}
