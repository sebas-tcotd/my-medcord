import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../../../../store/selectors/app.selectors';
import { MainFeature } from './main-feature.selectors';

export const selectUsersRegistry = createSelector(
  MainFeature,
  (state) => state.usersRegistry?.registeredUsers
);

export const selectLoggedUserId = createSelector(
  selectAuthState,
  (state) => state.user?.id
);
