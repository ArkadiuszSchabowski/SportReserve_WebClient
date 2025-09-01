import { CommonModule } from '@angular/common';
import { DialogAddRaceComponent } from 'src/app/components/dialog/dialog-add-race/dialog-add-race.component';
import { DialogAddRaceTraceComponent } from 'src/app/components/dialog/dialog-add-race-trace/dialog-add-race-trace.component';
import { DialogRemoveRaceComponent } from 'src/app/components/dialog/dialog-remove-race/dialog-remove-race.component';
import { DialogRemoveRaceTraceComponent } from 'src/app/components/dialog/dialog-remove-race-trace/dialog-remove-race-trace.component';
import { DialogRemoveUserComponent } from 'src/app/components/dialog/dialog-remove-user/dialog-remove-user.component';
import { DialogUpdateRaceComponent } from 'src/app/components/dialog/dialog-update-race/dialog-update-race.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DialogAddRaceComponent,
    DialogAddRaceTraceComponent,
    DialogRemoveRaceComponent,
    DialogRemoveRaceTraceComponent,
    DialogRemoveUserComponent,
    DialogUpdateRaceComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    DialogAddRaceComponent,
    DialogAddRaceTraceComponent,
    DialogRemoveRaceComponent,
    DialogRemoveRaceTraceComponent,
    DialogRemoveUserComponent,
    DialogUpdateRaceComponent
  ],
})
export class DialogModule {}
