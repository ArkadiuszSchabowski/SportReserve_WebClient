import { Component, OnInit } from '@angular/core';
import { DialogRemoveUserComponent } from '../../dialog/dialog-remove-user/dialog-remove-user.component';
import { FormBuilder } from '@angular/forms';
import { GetUserDto } from 'src/app/models/user/get-user-dto';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-moderator-panel-users',
  templateUrl: './moderator-panel-users.component.html',
  styleUrls: ['./moderator-panel-users.component.scss'],
})
export class ModeratorPanelUsersComponent implements OnInit {
  users: GetUserDto[] = [];
  allUsers: GetUserDto[] = [];
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.filterUsersWhenValueChanges();
  }

  deleteUser(id: number) {
    this.userService.remove(id).subscribe({
      next: () => {
        this.toastr.success(`User (ID: ${id}) successfully removed.`);
        this.getUsers();
      },
    });
  }

  filterUsers(searchText: string | null) {
    if (!searchText) {
      this.users = this.allUsers;
      return;
    }

    const filteredText = searchText.toLowerCase().trim();

    this.users = this.allUsers.filter(
      (user) =>
        user.id.toString().includes(filteredText) ||
        user.email.toLowerCase().includes(filteredText) ||
        user.name.toLowerCase().includes(filteredText) ||
        user.surname.toLowerCase().includes(filteredText) ||
        user.dateOfBirth.toLowerCase().includes(filteredText) ||
        user.gender.toLowerCase().includes(filteredText)
    );
  }

  filterUsersWhenValueChanges() {
    this.searchForm.get('searchValue')?.valueChanges.subscribe((value) => {
      this.filterUsers(value);
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.allUsers = response;
        this.users = response;
      },
    });
  }

  openDialog(user: GetUserDto) {
    let dialogRef = this.dialog.open(DialogRemoveUserComponent, { data: user });

    dialogRef.afterClosed().subscribe({
      next: (response) => {
        if (response == true) {
          this.deleteUser(user.id);
        }
      },
    });
  }
}
