import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPanelComponent } from './moderator-panel.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('ModeratorPanelComponent', () => {
  let component: ModeratorPanelComponent;
  let fixture: ComponentFixture<ModeratorPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorPanelComponent],
      imports: [AppRoutingModule, MaterialModule]
    });
    fixture = TestBed.createComponent(ModeratorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
