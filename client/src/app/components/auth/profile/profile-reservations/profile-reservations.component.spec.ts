import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileReservationsComponent } from './profile-reservations.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';

describe('ProfileReservationsComponent', () => {
  let component: ProfileReservationsComponent;
  let fixture: ComponentFixture<ProfileReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileReservationsComponent],
      imports: [HttpClientTestingModule, MaterialModule]
    });
    fixture = TestBed.createComponent(ProfileReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
