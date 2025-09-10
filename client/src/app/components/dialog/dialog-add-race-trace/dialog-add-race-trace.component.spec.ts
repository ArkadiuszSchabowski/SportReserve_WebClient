import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddRaceTraceComponent } from './dialog-add-race-trace.component';
import { GetRaceDto } from 'src/app/models/race/get-race-dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogAddRaceTraceComponent', () => {
  let component: DialogAddRaceTraceComponent;
  let fixture: ComponentFixture<DialogAddRaceTraceComponent>;
  let toastrService: ToastrService;
  const data: GetRaceDto = {} as GetRaceDto;
  const mockDialogRef = {};
  class MockToastrService{}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddRaceTraceComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MaterialModule, ReactiveFormsModule],
      providers: [
        {provide: ToastrService, useClass: MockToastrService},
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: data }
      ],
    });
    fixture = TestBed.createComponent(DialogAddRaceTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
