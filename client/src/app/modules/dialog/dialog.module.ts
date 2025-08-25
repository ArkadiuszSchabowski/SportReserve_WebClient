import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRemoveUserComponent } from 'src/app/components/dialog/dialog-remove-user/dialog-remove-user.component';
import { MaterialModule } from '../material/material.module';
import { DialogRemoveRaceComponent } from 'src/app/components/dialog/dialog-remove-race/dialog-remove-race.component';

@NgModule({
  declarations: [DialogRemoveUserComponent, DialogRemoveRaceComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DialogRemoveUserComponent, DialogRemoveRaceComponent],
})
export class DialogModule {}
