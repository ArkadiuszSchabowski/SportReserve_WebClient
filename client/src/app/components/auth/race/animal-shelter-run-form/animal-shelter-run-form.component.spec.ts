import { ActivatedRoute } from '@angular/router';
import { AnimalShelterRunFormComponent } from './animal-shelter-run-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AnimalShelterRunFormComponent', () => {
  let component: AnimalShelterRunFormComponent;
  let fixture: ComponentFixture<AnimalShelterRunFormComponent>;
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
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatDatepickerModule,
        MaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule
      ],
      declarations: [AnimalShelterRunFormComponent],
      providers: [
        { provide: ToastrService, useClass: MockToastrService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    });
    fixture = TestBed.createComponent(AnimalShelterRunFormComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
