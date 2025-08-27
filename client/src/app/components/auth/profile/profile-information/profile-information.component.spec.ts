import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationComponent } from './profile-information.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProfileInformationComponent', () => {
  let component: ProfileInformationComponent;
  let fixture: ComponentFixture<ProfileInformationComponent>;
  let toastrService: ToastrService;

  class MockToastrService{};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInformationComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MaterialModule, ReactiveFormsModule],
      providers: [{provide: ToastrService, useClass: MockToastrService}]
    });
    fixture = TestBed.createComponent(ProfileInformationComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
