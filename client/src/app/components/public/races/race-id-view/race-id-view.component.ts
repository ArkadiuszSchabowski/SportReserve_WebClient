import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { RaceService } from 'src/app/_services/race.service';
import { environment } from 'src/app/environments/environment';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';

@Component({
  selector: 'app-race-id-view',
  templateUrl: './race-id-view.component.html',
  styleUrls: ['./race-id-view.component.scss'],
})
export class RaceIdViewComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private raceService: RaceService
  ) {}

  id: number | null = null;
  currentUser: string | null = null;
  race: GetRaceViewDto = {} as GetRaceViewDto;
  raceIdString: string | null = null;
  raceSlug: string = '';
  raceUrl = environment.raceUrl;

  ngOnInit(): void {
    this.getRace();
    this.setUser();
  }

  getRace() {
    this.getRaceIdFromUrl();
    this.id = this.convertIdToNumber();
    this.raceService.getRaceWithId(this.id).subscribe({
      next: (response) => {
        this.race = response;
        this.raceSlug = this.convertToSlug(this.race.name);
      },
    });
  }
  convertIdToNumber(): number {
    return parseInt(this.raceIdString!.toString());
  }
  
  convertToSlug = (text: string): string => {
  return text.toLowerCase().replace(/ /g, '-');
};

  getRaceIdFromUrl() {
    this.raceIdString = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToForm() {
    if (!this.currentUser) {
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl(`${this.raceSlug}/form/${this.id}`);
    }
  }
  setUser() {
    this.authService.currentUser$.subscribe({
      next: (response) => {
        this.currentUser = response;
      },
    });
  }
}
