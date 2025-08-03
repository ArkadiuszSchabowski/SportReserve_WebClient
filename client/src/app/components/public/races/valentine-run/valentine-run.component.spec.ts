import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineRunComponent } from './valentine-run.component';

describe('ValentineRunComponent', () => {
  let component: ValentineRunComponent;
  let fixture: ComponentFixture<ValentineRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValentineRunComponent]
    });
    fixture = TestBed.createComponent(ValentineRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
