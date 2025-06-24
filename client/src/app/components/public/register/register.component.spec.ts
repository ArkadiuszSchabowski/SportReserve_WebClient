import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let toastrService: ToastrService;

  class MockToastrService {
    success(message: string) {
      console.log(message);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [BrowserAnimationsModule, FormsModule, MaterialModule, ToastrModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
