import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { RegisterComponent } from 'src/app/components/public/register/register.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, FormsModule, MaterialModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class PublicModule { }
