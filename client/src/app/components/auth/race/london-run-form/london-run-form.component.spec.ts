import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LondonRunFormComponent } from './london-run-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LondonRunFormComponent', () => {
  let component: LondonRunFormComponent;
  let fixture: ComponentFixture<LondonRunFormComponent>;
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
      declarations: [LondonRunFormComponent],
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
    fixture = TestBed.createComponent(LondonRunFormComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
