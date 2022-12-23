import { AppState } from '../app.reducer';

export const selectAuthState = (state: AppState) => state.auth;
