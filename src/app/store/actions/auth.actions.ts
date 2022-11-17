import { createAction, props } from '@ngrx/store';

export const loginAttempted = createAction(
  '[Auth] Login attempted',
  props<{ email: string; password: string }>()
);

export const verificationCode = createAction(
  '[Auth] Verification code typed',
  props<{ code: string }>()
);

export const loginSuccessful = createAction('[Auth] Login successful');

export const loginFailed = createAction(
  '[Auth] Login failed',
  props<{ payload: any }>()
);
