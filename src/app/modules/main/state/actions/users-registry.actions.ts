import { createAction, props } from '@ngrx/store';
import { User } from '../../../../core/models/user.model';

export const usersLoad = createAction('[Users Registry] USERS_LOAD');

export const loadUsersSuccessful = createAction(
  '[Users Registry] USERS_DATA_SUCCESSFULLY_LOADED',
  props<{ users: User[] }>()
);

export const loadUsersError = createAction(
  '[Users Registry] USERS_LOAD_ERROR',
  props<{ payload: any }>()
);

export const userAddition = createAction(
  '[User Registry] USERS_ADDITION_ATTEMPTED',
  props<{ payload: User }>()
);

export const userAdditionSuccess = createAction(
  '[User registry] USER_ADDITION_SUCCESS'
);

export const userAdditionFail = createAction(
  '[User registry] USER_ADDITION_FAILED',
  props<{ payload: any }>()
);
