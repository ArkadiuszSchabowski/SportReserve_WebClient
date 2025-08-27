import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValentineRunFormComponent } from './valentine-run-form.component';

describe('ValentineRunFormComponent', () => {
  let component: ValentineRunFormComponent;
  let fixture: ComponentFixture<ValentineRunFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValentineRunFormComponent],
    });
    fixture = TestBed.createComponent(ValentineRunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
