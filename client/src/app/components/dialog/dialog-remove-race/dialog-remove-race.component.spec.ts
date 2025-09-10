import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRemoveRaceComponent } from './dialog-remove-race.component';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogRemoveRaceComponent', () => {
  let component: DialogRemoveRaceComponent;
  let fixture: ComponentFixture<DialogRemoveRaceComponent>;
  const data: GetRaceViewDto = {} as GetRaceViewDto;

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
