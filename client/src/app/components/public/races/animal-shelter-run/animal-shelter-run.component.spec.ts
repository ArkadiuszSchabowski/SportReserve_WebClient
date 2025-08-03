import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalShelterRunComponent } from './animal-shelter-run.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('AnimalShelterRunComponent', () => {
  let component: AnimalShelterRunComponent;
  let fixture: ComponentFixture<AnimalShelterRunComponent>;
  let toastrService: ToastrService;

  class MockToastrService {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalShelterRunComponent],
      imports: [ToastrModule],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(AnimalShelterRunComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
