import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProfileInformationComponent } from 'src/app/components/auth/profile-information/profile-information.component';
import { ProfileNavigationComponent } from 'src/app/components/auth/profile-navigation/profile-navigation.component';
import { ProfileReservationsComponent } from 'src/app/components/auth/profile-reservations/profile-reservations.component';

@NgModule({
  declarations: [
    ProfileInformationComponent,
    ProfileNavigationComponent,
    ProfileReservationsComponent,
  ],
  imports: [AppRoutingModule, CommonModule, MaterialModule],
  exports: [
    ProfileInformationComponent,
    ProfileNavigationComponent,
    ProfileReservationsComponent,
  ],
})
export class AuthModule {}
