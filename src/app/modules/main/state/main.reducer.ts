import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface MainState {
  user: reducers.UserState;
}

export const mainReducers: ActionReducerMap<MainState> = {
  user: reducers.userReducer,
};
