import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonRunFormComponent } from './london-run-form.component';

describe('LondonRunFormComponent', () => {
  let component: LondonRunFormComponent;
  let fixture: ComponentFixture<LondonRunFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LondonRunFormComponent]
    });
    fixture = TestBed.createComponent(LondonRunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
