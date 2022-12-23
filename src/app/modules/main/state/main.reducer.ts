import { ActionReducerMap } from '@ngrx/store';
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
