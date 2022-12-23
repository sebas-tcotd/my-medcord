import { createSelector } from '@ngrx/store';
import { MainFeature } from './main-feature.selectors';

export const selectMedicalRecords = createSelector(
  MainFeature,
  (state) => state.medicalRecord.medicalRecords
);
