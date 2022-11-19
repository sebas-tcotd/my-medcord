import { createAction, props } from '@ngrx/store';

export const viewportMobile = createAction(
  '[Viewport] VIEWPORT_IS_MOBILE',
  props<{ width: number; isMobile: boolean }>()
);

export const viewportDesktop = createAction(
  '[Vierport] VIEWPORT_IS_DESKTOP',
  props<{ width: number; isMobile: boolean }>()
);
