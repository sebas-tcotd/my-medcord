import { createReducer, on } from '@ngrx/store';
import { LoginErrorResponse } from '../../core/interfaces/login.interface';
import { User } from '../../core/models/user.model';
import * as authActions from '../actions/auth.actions';

export interface UserState {
  error: LoginErrorResponse | undefined;
  user: User | null;
}

const authInitialState: UserState = {
  error: undefined,
  user: null,
};

export const authReducer = createReducer(
  authInitialState,
  on(authActions.loginSuccessful, (state, { user }) => ({
    ...state,
    user: { ...user },
    error: undefined,
  })),
  on(authActions.loginFailed, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
  on(authActions.setUserData, (state, { user }) => ({
    ...state,
    user,
  }))
);
