import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInformationComponent } from 'src/app/components/auth/profile-information/profile-information.component';

@NgModule({
  declarations: [ProfileInformationComponent],
  imports: [CommonModule],
  exports: [ProfileInformationComponent],
})
export class AuthModule {}
