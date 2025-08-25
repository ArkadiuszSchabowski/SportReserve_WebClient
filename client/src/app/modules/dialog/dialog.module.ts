import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRemoveUserComponent } from 'src/app/components/dialog/dialog-remove-user/dialog-remove-user.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [DialogRemoveUserComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [DialogRemoveUserComponent]
})
export class DialogModule { }