import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss']
})
export class HelperComponent {
  constructor(private userService: UserService){}

  getUsers(){
    this.userService.getUsers().subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
}
