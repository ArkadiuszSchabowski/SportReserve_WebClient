import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ModeratorPanelComponent } from './moderator-panel.component';
import { ToastrService } from 'ngx-toastr';

describe('ModeratorPanelComponent', () => {
  let component: ModeratorPanelComponent;
  let fixture: ComponentFixture<ModeratorPanelComponent>;
  let toastrService: ToastrService;

  class MockToastrService{}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelComponent],
      imports: [MaterialModule],
      providers: [{provide: ToastrService, useClass: MockToastrService}]
    });
    fixture = TestBed.createComponent(ModeratorPanelComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
