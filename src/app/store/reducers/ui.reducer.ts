import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import * as uiActions from '../actions/ui.actions';

export interface UiState {
  width: number;
  isLoading: boolean;
  isMobile: boolean | undefined;
}

const viewportInitialState: UiState = {
  width: 0,
  isMobile: undefined,
  isLoading: false,
};

export const uiReducer = createReducer(
  viewportInitialState,
  on(uiActions.viewportMobile, (state, { width }) => ({
    ...state,
    width,
    isMobile: true,
  })),
  on(uiActions.viewportDesktop, (state, { width }) => ({
    ...state,
    width,
    isMobile: false,
  })),
  on(uiActions.loadingStarted, (state) => ({ ...state, isLoading: true })),
  on(uiActions.loadingFinished, (state) => ({ ...state, isLoading: false }))
);
