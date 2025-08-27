import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ModeratorPanelRacesComponent } from './moderator-panel-races.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

describe('ModeratorPanelRacesComponent', () => {
  let component: ModeratorPanelRacesComponent;
  let fixture: ComponentFixture<ModeratorPanelRacesComponent>;
  let toastrService: ToastrService;
  class MockToastrService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelRacesComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MaterialModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
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
