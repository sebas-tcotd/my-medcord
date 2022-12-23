import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as reducers from './reducers';

export interface AppState {
  auth: reducers.UserState;
  ui: reducers.UiState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: reducers.authReducer,
  ui: reducers.uiReducer,
};

export const localStorageSyncReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> =>
  localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];
