import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';

import * as reducers from './reducers';

export interface MainState {
  usersRegistry: reducers.UsersRegistryState;
}

export interface MainFeatureState extends AppState {
  usersRegistry: MainState;
}

export const mainReducers: ActionReducerMap<MainState> = {
  usersRegistry: reducers.usersRegistryReducer,
};
