import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let toastrService: ToastrService;

  class MockToastrService {
    success(message: string) {
      console.log(message);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        ToastrModule,
      ],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
