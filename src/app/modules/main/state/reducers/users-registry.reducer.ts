import { createReducer, on } from '@ngrx/store';
import { User } from '../../../../core/models/user.model';

import * as MainAction from '../actions';

export interface UsersRegistryState {
  registeredUsers: User[] | null;
  page: number;
}

const usersRegistryInitialState: UsersRegistryState = {
  registeredUsers: null,
  page: 1,
};

export const usersRegistryReducer = createReducer(
  usersRegistryInitialState,
  on(MainAction.loadUsersSuccessful, (state, { users }) => ({
    ...state,
    registeredUsers: users,
  }))
);
