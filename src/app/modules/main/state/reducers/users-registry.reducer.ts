import { createReducer } from '@ngrx/store';
import { User } from '../../../../core/models/user.model';

export interface UsersRegistryState {
  registeredUsers: User | null;
  page: number;
}

const usersRegistryInitialState: UsersRegistryState = {
  registeredUsers: null,
  page: 1,
};

export const usersRegistryReducer = createReducer(usersRegistryInitialState);
