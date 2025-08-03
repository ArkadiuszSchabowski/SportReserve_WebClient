import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineRunComponent } from './valentine-run.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('ValentineRunComponent', () => {
  let component: ValentineRunComponent;
  let fixture: ComponentFixture<ValentineRunComponent>;
  let toastrService: ToastrService;

  class MockToastrService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValentineRunComponent],
      imports: [ToastrModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(ValentineRunComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
