import { createSelector } from '@ngrx/store';
import { MainState } from '../main.reducer';
import { MainFeature } from './main-feature.selectors';

export const selectDoctor = createSelector(
  MainFeature,
  (state) => state.medicalRecord.doctors
);

export const medicalRecordState = (state: MainState) => state.medicalRecord;

export const selectDoctorById = createSelector(medicalRecordState, (state) => {
  state.medicalRecords;
});
