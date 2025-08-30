import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRemoveUserComponent } from 'src/app/components/dialog/dialog-remove-user/dialog-remove-user.component';
import { MaterialModule } from '../material/material.module';
import { DialogRemoveRaceComponent } from 'src/app/components/dialog/dialog-remove-race/dialog-remove-race.component';
import { DialogUpdateRaceComponent } from 'src/app/components/dialog/dialog-update-race/dialog-update-race.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogAddRaceComponent } from 'src/app/components/dialog/dialog-add-race/dialog-add-race.component';

@NgModule({
  declarations: [
    DialogAddRaceComponent,
    DialogRemoveUserComponent,
    DialogRemoveRaceComponent,
    DialogUpdateRaceComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    DialogAddRaceComponent,
    DialogRemoveUserComponent,
    DialogRemoveRaceComponent,
    DialogUpdateRaceComponent,
  ],
})
export class DialogModule {}
