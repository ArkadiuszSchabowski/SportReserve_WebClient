import { AnimalShelterRunFormComponent } from './animal-shelter-run-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AnimalShelterRunFormComponent', () => {
  let component: AnimalShelterRunFormComponent;
  let fixture: ComponentFixture<AnimalShelterRunFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalShelterRunFormComponent]
    });
    fixture = TestBed.createComponent(AnimalShelterRunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
