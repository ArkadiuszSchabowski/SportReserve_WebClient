import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRemoveRaceComponent } from './dialog-remove-race.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';

describe('DialogRemoveRaceComponent', () => {
  let component: DialogRemoveRaceComponent;
  let fixture: ComponentFixture<DialogRemoveRaceComponent>;
  const data: GetRaceViewDto = new GetRaceViewDto();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRemoveRaceComponent],
      imports: [MaterialModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
    });
    fixture = TestBed.createComponent(DialogRemoveRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
