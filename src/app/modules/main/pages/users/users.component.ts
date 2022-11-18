import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';

import { usersListMock } from '../../../../mocks/users-list.mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  public users: any[] = usersListMock;
  public columns: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];;

  constructor() {}

  ngOnInit(): void {}
}
