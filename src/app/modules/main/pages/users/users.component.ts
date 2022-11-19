import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import { PermissionsEnum } from '../../../../core/enums/permissions.enum';
import { RoleEnum } from '../../../../core/enums/role.enum';
import { User } from '../../../../core/models/user.model';

import { usersListMock } from '../../../../mocks/users-list.mock';
import { UsersTableColumns } from './users.config';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  public users: User[] = usersListMock;
  public columns: ColDef[] = UsersTableColumns;

  constructor() {}

  ngOnInit(): void {}
}
