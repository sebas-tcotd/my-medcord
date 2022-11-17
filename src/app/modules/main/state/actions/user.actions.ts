import { createAction } from '@ngrx/store';

export const loadUser = createAction('[User] USER_DATA_LOAD');
export const loadUserSuccessful = createAction(
  '[User] USER_DATA_LOAD_SUCCESS'
);
export const loadUserError = createAction('[User] USER_DATA_LOAD_ERROR');
