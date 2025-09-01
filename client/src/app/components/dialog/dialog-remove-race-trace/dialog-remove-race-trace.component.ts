import { Component, Inject } from '@angular/core';
import { GetRaceTraceDto } from 'src/app/models/race/get-race-trace-dto';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-remove-race-trace',
  templateUrl: './dialog-remove-race-trace.component.html',
  styleUrls: ['./dialog-remove-race-trace.component.scss']
})
export class DialogRemoveRaceTraceComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: GetRaceTraceDto) {}
}
