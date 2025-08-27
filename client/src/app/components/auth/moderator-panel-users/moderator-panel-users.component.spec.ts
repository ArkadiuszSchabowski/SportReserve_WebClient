import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'src/app/modules/dialog/dialog.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ModeratorPanelUsersComponent } from './moderator-panel-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

describe('ModeratorPanelUsersComponent', () => {
  let component: ModeratorPanelUsersComponent;
  let fixture: ComponentFixture<ModeratorPanelUsersComponent>;
  let toastrService: ToastrService;

  class MockToastrService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelUsersComponent],
      imports: [
        BrowserAnimationsModule,
        DialogModule,
        HttpClientTestingModule,
        MaterialModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(ModeratorPanelUsersComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
