import { createAction, props } from '@ngrx/store';

export const viewportMobile = createAction(
  '[UI] VIEWPORT_IS_MOBILE',
  props<{ width: number; isMobile: boolean }>()
);

export const viewportDesktop = createAction(
  '[UI] VIEWPORT_IS_DESKTOP',
  props<{ width: number; isMobile: boolean }>()
);

export const loadingStarted = createAction('[UI] LOADING_STARTED');

export const loadingFinished = createAction('[UI] LOADING_FINISHED');
