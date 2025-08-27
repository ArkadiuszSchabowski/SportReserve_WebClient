import { Component, Inject } from '@angular/core';
import { GetUserDto } from 'src/app/models/user/get-user-dto';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-remove-user',
  templateUrl: './dialog-remove-user.component.html',
  styleUrls: ['./dialog-remove-user.component.scss'],
})
export class DialogRemoveUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: GetUserDto) {}
}
