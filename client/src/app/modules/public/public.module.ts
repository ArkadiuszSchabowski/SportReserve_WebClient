import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { RegisterComponent } from 'src/app/components/public/register/register.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HelperComponent } from 'src/app/components/public/helper/helper.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HelperComponent
  ],
  imports: [
    CommonModule, FormsModule, MaterialModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HelperComponent
  ]
})
export class PublicModule { }
