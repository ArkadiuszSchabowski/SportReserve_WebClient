import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ModeratorPanelComponent } from './moderator-panel.component';

describe('ModeratorPanelComponent', () => {
  let component: ModeratorPanelComponent;
  let fixture: ComponentFixture<ModeratorPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelComponent],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(ModeratorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
