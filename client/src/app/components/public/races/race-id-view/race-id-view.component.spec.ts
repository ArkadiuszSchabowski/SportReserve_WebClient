import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceIdViewComponent } from './race-id-view.component';

describe('RaceIdViewComponent', () => {
  let component: RaceIdViewComponent;
  let fixture: ComponentFixture<RaceIdViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceIdViewComponent]
    });
    fixture = TestBed.createComponent(RaceIdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
