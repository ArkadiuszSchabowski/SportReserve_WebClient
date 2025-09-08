import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceIdViewComponent } from './race-id-view.component';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('RaceIdViewComponent', () => {
  let component: RaceIdViewComponent;
  let fixture: ComponentFixture<RaceIdViewComponent>;
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
      declarations: [RaceIdViewComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ToastrService, useClass: MockToastrService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    });
    fixture = TestBed.createComponent(RaceIdViewComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
