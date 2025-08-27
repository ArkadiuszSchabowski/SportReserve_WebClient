import { Component, Inject } from '@angular/core';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-remove-race',
  templateUrl: './dialog-remove-race.component.html',
  styleUrls: ['./dialog-remove-race.component.scss'],
})
export class DialogRemoveRaceComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: GetRaceViewDto) {}
}
