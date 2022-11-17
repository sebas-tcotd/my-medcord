import { createAction } from '@ngrx/store';

export const usersLoad = createAction('[Users Registry] USERS_LOAD');
export const loadUsersSuccessful = createAction(
  '[Users Registry] USERS_DATA_SUCCESSFULLY_LOADED'
);
export const loadUsersError = createAction('[Users Registry] USERS_LOAD_ERROR');
