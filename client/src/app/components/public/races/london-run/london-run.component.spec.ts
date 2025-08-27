import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LondonRunComponent } from './london-run.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('LondonRunComponent', () => {
  let component: LondonRunComponent;
  let fixture: ComponentFixture<LondonRunComponent>;
  let toastrService: ToastrService;

  class MockToastrService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LondonRunComponent],
      imports: [ToastrModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(LondonRunComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
