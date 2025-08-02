import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationComponent } from './profile-information.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfileInformationComponent', () => {
  let component: ProfileInformationComponent;
  let fixture: ComponentFixture<ProfileInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInformationComponent],
      imports: [BrowserAnimationsModule, MaterialModule],
    });
    fixture = TestBed.createComponent(ProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
