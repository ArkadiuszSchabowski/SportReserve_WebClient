import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('AppComponent', () => {
  let toastrService: ToastrService;

  class MockToastrService {
    success(message: string) {
      console.log(message);
    }
  }

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, ToastrModule],
      declarations: [AppComponent, NavbarComponent],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    })
  );

  it('should create the app', () => {
    toastrService = TestBed.inject(ToastrService);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SportReserve_WebClient'`, () => {
    toastrService = TestBed.inject(ToastrService);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SportReserve_WebClient');
  });
});
