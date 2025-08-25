import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPanelRacesComponent } from './moderator-panel-races.component';

describe('ModeratorPanelRacesComponent', () => {
  let component: ModeratorPanelRacesComponent;
  let fixture: ComponentFixture<ModeratorPanelRacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelRacesComponent]
    });
    fixture = TestBed.createComponent(ModeratorPanelRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
