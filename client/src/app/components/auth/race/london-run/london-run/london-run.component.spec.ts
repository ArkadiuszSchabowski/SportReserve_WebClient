import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonRunComponent } from './london-run.component';

describe('LondonRunComponent', () => {
  let component: LondonRunComponent;
  let fixture: ComponentFixture<LondonRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LondonRunComponent]
    });
    fixture = TestBed.createComponent(LondonRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
