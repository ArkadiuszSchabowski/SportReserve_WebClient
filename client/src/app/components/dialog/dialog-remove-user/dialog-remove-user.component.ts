import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetUserDto } from 'src/app/models/user/get-user-dto';

@Component({
  selector: 'app-dialog-remove-user',
  templateUrl: './dialog-remove-user.component.html',
  styleUrls: ['./dialog-remove-user.component.scss']
})
export class DialogRemoveUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: GetUserDto){

  }
}
