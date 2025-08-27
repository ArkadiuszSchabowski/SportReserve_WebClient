import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRemoveUserComponent } from './dialog-remove-user.component';
import { GetUserDto } from 'src/app/models/user/get-user-dto';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogRemoveUserComponent', () => {
  let component: DialogRemoveUserComponent;
  let fixture: ComponentFixture<DialogRemoveUserComponent>;
  const data: GetUserDto = new GetUserDto();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRemoveUserComponent],
      imports: [MaterialModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
    });
    fixture = TestBed.createComponent(DialogRemoveUserComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
