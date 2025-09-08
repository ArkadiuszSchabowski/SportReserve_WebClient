import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ContactComponent } from 'src/app/components/public/contact/contact.component';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { RacesComponent } from 'src/app/components/public/races/races.component';
import { RegisterComponent } from 'src/app/components/public/register/register.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RaceIdViewComponent } from 'src/app/components/public/races/race-id-view/race-id-view.component';

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RaceIdViewComponent,
    RacesComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RaceIdViewComponent,
    RacesComponent,
    RegisterComponent
  ],
})
export class PublicModule {}
