import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { PublicModule } from './modules/public/public.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { DialogModule } from './modules/dialog/dialog.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    PublicModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
