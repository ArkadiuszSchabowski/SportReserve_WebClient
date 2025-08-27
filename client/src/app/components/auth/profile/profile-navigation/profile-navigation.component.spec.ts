import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileNavigationComponent } from './profile-navigation.component';
import { ToastrService } from 'ngx-toastr';

describe('ProfileNavigationComponent', () => {
  let component: ProfileNavigationComponent;
  let fixture: ComponentFixture<ProfileNavigationComponent>;
  let toastrService: ToastrService;

  class MockToastrService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileNavigationComponent],
      imports: [AppRoutingModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(ProfileNavigationComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
