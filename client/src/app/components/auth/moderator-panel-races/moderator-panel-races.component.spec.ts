import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPanelRacesComponent } from './moderator-panel-races.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModeratorPanelRacesComponent', () => {
  let component: ModeratorPanelRacesComponent;
  let fixture: ComponentFixture<ModeratorPanelRacesComponent>;
  let toastrService: ToastrService;
  class MockToastrService{};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelRacesComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MaterialModule, ReactiveFormsModule],
      providers: [{provide: ToastrService, useClass: MockToastrService}]
    });
    fixture = TestBed.createComponent(ModeratorPanelRacesComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
