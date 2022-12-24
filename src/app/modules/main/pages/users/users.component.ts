import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import * as mainActions from '../../state/actions';
import { User } from '../../../../core/models/user.model';

import { usersListMock } from '../../../../mocks/users-list.mock';
import { MainFeatureState } from '../../state/main.reducer';
import { selectUsersRegistry } from '../../state/selectors/users-registry.selectors';
import { UsersTableColumns } from './users.config';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  public users$!: Observable<User[] | null>;
  public columns: ColDef[] = UsersTableColumns;

  constructor(private readonly store: Store<MainFeatureState>) {}

  ngOnInit(): void {
    this.store.dispatch(mainActions.usersLoad());
    this.getRegisteredUsers();
  }

  private getRegisteredUsers() {
    this.users$ = this.store.select(selectUsersRegistry);
  }
}
