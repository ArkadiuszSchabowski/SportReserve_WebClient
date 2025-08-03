import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('RacesComponent', () => {
  let component: RacesComponent;
  let fixture: ComponentFixture<RacesComponent>;
  let toastrService: ToastrService;
  
  class MockToastrService{}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacesComponent],
      imports: [ToastrModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(RacesComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
