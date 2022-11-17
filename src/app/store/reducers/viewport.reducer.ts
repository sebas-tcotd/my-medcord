import { createReducer, on } from '@ngrx/store';
import * as viewportActions from '../actions/viewport.actions';

export interface ViewportState {
  width: number;
  isMobile: boolean | undefined;
}

const viewportInitialState: ViewportState = {
  width: 0,
  isMobile: undefined,
};

export const viewportReducer = createReducer(
  viewportInitialState,
  on(viewportActions.viewportMobile, (state, { width }) => ({
    ...state,
    width,
    isMobile: true,
  })),
  on(viewportActions.viewportDesktop, (state, { width }) => ({
    ...state,
    width,
    isMobile: false,
  }))
);
