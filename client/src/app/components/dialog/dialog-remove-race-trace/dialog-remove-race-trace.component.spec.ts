import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRemoveRaceTraceComponent } from './dialog-remove-race-trace.component';
import { GetRaceTraceDto } from 'src/app/models/race/get-race-trace-dto';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogRemoveRaceTraceComponent', () => {
  let component: DialogRemoveRaceTraceComponent;
  let fixture: ComponentFixture<DialogRemoveRaceTraceComponent>;
  const data: GetRaceTraceDto = {} as GetRaceTraceDto;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRemoveRaceTraceComponent],
      imports: [MaterialModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
    });
    fixture = TestBed.createComponent(DialogRemoveRaceTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
