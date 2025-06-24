import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperComponent } from './helper.component';
import { HttpClientModule } from '@angular/common/http';

describe('HelperComponent', () => {
  let component: HelperComponent;
  let fixture: ComponentFixture<HelperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelperComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(HelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
