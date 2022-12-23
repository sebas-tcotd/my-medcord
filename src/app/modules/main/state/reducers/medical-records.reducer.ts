import { createReducer, on } from '@ngrx/store';
import { MedicalRecordResponse } from '../../../../core/interfaces/medical-record.interface';
import * as MainActions from '../actions';

export interface MedicalRecordsState {
  medicalRecords: MedicalRecordResponse[] | null;
  page: number;
}

const medicalRecordsInitialState: MedicalRecordsState = {
  medicalRecords: null,
  page: 1,
};

export const medicalRecordsReducer = createReducer(
  medicalRecordsInitialState,
  on(
    MainActions.loadMedicalRecordsSuccessfull,
    (state, { medicalRecords }) => ({ ...state, medicalRecords })
  )
);
