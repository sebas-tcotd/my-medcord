import { createAction, props } from '@ngrx/store';
import { User } from '../../core/models/user.model';

export const loginAttempted = createAction(
  '[Auth] LOGIN_ATTEMPTED',
  props<{ email: string; password: string }>()
);

export const verificationCode = createAction(
  '[Auth] VERIFICATION_CODE_SIGNED',
  props<{ code: string }>()
);

export const loginSuccessful = createAction('[Auth] LOGIN_SUCCESSFULL');

export const loginFailed = createAction(
  '[Auth] LOGIN_FAILED',
  props<{ payload: any }>()
);

export const setUserData = createAction(
  '[Auth] SET_USER_DATA',
  props<{ payload: User }>()
);

export const unsetUserData = createAction('[Auth] UNSET_USER_DATA');
