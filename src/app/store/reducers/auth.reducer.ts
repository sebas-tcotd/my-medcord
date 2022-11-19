import { createReducer, on } from '@ngrx/store';
import { User } from '../../core/models/user.model';
import * as authActions from '../actions/auth.actions';

export interface UserState {
  user: User | null;
}

const authInitialState: UserState = {
  user: null,
};

export const authReducer = createReducer(
  authInitialState,
  on(authActions.loginSuccessful, (state, { user }) => ({
    ...state,
    user: { ...user },
  }))
);
