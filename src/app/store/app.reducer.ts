import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  auth: reducers.UserState;
  viewport: reducers.ViewportState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: reducers.authReducer,
  viewport: reducers.viewportReducer,
};
