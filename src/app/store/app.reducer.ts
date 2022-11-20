import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  auth: reducers.UserState;
  ui: reducers.UiState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: reducers.authReducer,
  ui: reducers.uiReducer,
};
