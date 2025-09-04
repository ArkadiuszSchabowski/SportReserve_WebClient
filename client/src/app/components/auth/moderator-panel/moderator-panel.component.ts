import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-moderator-panel',
  templateUrl: './moderator-panel.component.html',
  styleUrls: ['./moderator-panel.component.scss'],
})
export class ModeratorPanelComponent {
  constructor(public authService: AuthService){
    
  }
}
