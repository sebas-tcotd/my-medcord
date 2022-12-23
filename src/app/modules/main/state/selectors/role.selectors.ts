import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../../../../store/selectors/app.selectors';

export const selectLoggedUserRole = createSelector(
  selectAuthState,
  (state) => state.user?.role
);
