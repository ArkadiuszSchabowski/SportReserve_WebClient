import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from './modules/dialog/dialog.module';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { PublicModule } from './modules/public/public.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, NavbarComponent ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    HttpClientModule,
    MaterialModule,
    PublicModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
