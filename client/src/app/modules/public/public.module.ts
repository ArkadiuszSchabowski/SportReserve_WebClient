import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { RegisterComponent } from 'src/app/components/public/register/register.component';
import { MaterialModule } from '../material/material.module';
import { HelperComponent } from 'src/app/components/public/helper/helper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HelperComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HelperComponent
  ]
})
export class PublicModule { }
