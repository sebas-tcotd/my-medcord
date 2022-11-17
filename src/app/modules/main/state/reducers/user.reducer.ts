import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.actions';

export interface UserState {
  error: boolean | null;
  user: any | null; // Agregar después el modelo de usuario
  loaded: boolean;
  loading: boolean;
}

const userInitialState: UserState = {
  error: null,
  loaded: false,
  loading: false,
  user: null,
};

export const userReducer = createReducer(
  userInitialState,
  on(userActions.loadUser, (state) => ({ ...state })),
  on(userActions.loadUserSuccessful, (state) => ({ ...state }))
);
