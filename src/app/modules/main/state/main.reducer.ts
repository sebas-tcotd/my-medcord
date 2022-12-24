import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from '../../../store/app.reducer';

import * as reducers from './reducers';

export interface MainState {
  usersRegistry: reducers.UsersRegistryState;
  medicalRecord: reducers.MedicalRecordsState;
}

export interface MainFeatureState extends AppState {
  mainFeature: MainState;
}

export const mainReducers: ActionReducerMap<MainState> = {
  usersRegistry: reducers.usersRegistryReducer,
  medicalRecord: reducers.medicalRecordsReducer,
};

export const localStorageSyncReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> =>
  localStorageSync({ keys: ['medicalRecord'], rehydrate: true })(reducer);

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];
