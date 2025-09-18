import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValentineRunFormComponent } from './valentine-run-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ValentineRunFormComponent', () => {
  let component: ValentineRunFormComponent;
  let fixture: ComponentFixture<ValentineRunFormComponent>;
  let toastrService: ToastrService;
  let activatedRoute: ActivatedRoute;

  class MockToastrService {}
  class MockActivatedRoute {
    snapshot = {
      paramMap: {
        get: (key: string) => '1',
      },
    };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValentineRunFormComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatDatepickerModule,
        MaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ToastrService, useClass: MockToastrService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    });
    fixture = TestBed.createComponent(ValentineRunFormComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
