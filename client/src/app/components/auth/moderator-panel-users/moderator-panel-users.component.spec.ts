import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPanelUsersComponent } from './moderator-panel-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { DialogModule } from 'src/app/modules/dialog/dialog.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModeratorPanelUsersComponent', () => {
  let component: ModeratorPanelUsersComponent;
  let fixture: ComponentFixture<ModeratorPanelUsersComponent>;
  let toastrService: ToastrService;

  class MockToastrService{}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelUsersComponent],
      imports: [BrowserAnimationsModule, DialogModule, HttpClientTestingModule, MaterialModule, ReactiveFormsModule],
      providers: [{provide: ToastrService, useClass: MockToastrService}]
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
