import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalShelterRunComponent } from './animal-shelter-run.component';

describe('AnimalShelterRunComponent', () => {
  let component: AnimalShelterRunComponent;
  let fixture: ComponentFixture<AnimalShelterRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalShelterRunComponent]
    });
    fixture = TestBed.createComponent(AnimalShelterRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
