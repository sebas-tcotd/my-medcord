import { createReducer, on } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';

export interface AuthState {
  credentials: { email: string; password: string };
  verification: string;
}

const authInitialState: AuthState = {
  credentials: { email: '', password: '' },
  verification: '',
};

export const authReducer = createReducer(authInitialState);
