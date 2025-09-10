import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogUpdateRaceComponent } from './dialog-update-race.component';
import { GetRaceViewDto } from 'src/app/models/race/get-race-view-dto';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

describe('DialogUpdateRaceComponent', () => {
  let component: DialogUpdateRaceComponent;
  let fixture: ComponentFixture<DialogUpdateRaceComponent>;
  const data: GetRaceViewDto = {} as GetRaceViewDto;
  let toastrService: ToastrService;

  class MockToastrService{}

  const mockDialogRef = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUpdateRaceComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MaterialModule, ReactiveFormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: mockDialogRef },
        {provide: ToastrService, useClass: MockToastrService}
      ],
    });
    fixture = TestBed.createComponent(DialogUpdateRaceComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
