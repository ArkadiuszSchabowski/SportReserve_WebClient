import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddRaceComponent } from './dialog-add-race.component';

describe('DialogAddRaceComponent', () => {
  let component: DialogAddRaceComponent;
  let fixture: ComponentFixture<DialogAddRaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddRaceComponent]
    });
    fixture = TestBed.createComponent(DialogAddRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
