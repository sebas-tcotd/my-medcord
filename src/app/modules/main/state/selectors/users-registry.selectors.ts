import { createSelector } from '@ngrx/store';
import { MainFeature } from './main-feature.selectors';

export const selectUsersRegistry = createSelector(
  MainFeature,
  (state) => state.usersRegistry?.registeredUsers
);
