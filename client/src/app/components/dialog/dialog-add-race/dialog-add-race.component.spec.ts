import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogAddRaceComponent } from './dialog-add-race.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogAddRaceComponent', () => {
  let component: DialogAddRaceComponent;
  let fixture: ComponentFixture<DialogAddRaceComponent>;
  let toastrService: ToastrService;
  const mockDialogRef = {};
  class MockToastrService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddRaceComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MaterialModule, ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: ToastrService, useClass: MockToastrService },
      ],
    });
    fixture = TestBed.createComponent(DialogAddRaceComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
