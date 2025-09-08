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
import { AnimalShelterRunComponent } from 'src/app/components/public/races/animal-shelter-run/animal-shelter-run.component';
import { LondonRunComponent } from 'src/app/components/public/races/london-run/london-run.component';
import { ValentineRunComponent } from 'src/app/components/public/races/valentine-run/valentine-run.component';

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RaceIdViewComponent,
    RacesComponent,
    RegisterComponent,
    AnimalShelterRunComponent,
    LondonRunComponent,
    ValentineRunComponent
  ],
  imports: [
    AppRoutingModule, CommonModule, CarouselModule.forRoot(), ReactiveFormsModule, MaterialModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports:[
    AnimalShelterRunComponent,
    LondonRunComponent,
    ValentineRunComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RaceIdViewComponent,
    RacesComponent,
    RegisterComponent,
  ]
})
export class PublicModule { }
