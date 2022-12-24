import { createReducer, on } from '@ngrx/store';
import { MedicalRecordResponse } from '../../../../core/interfaces/medical-record.interface';
import { Appointment } from '../../../../core/models/appointment.model';
import { Doctor } from '../../../../core/models/doctor.model';
import * as MainActions from '../actions';

export interface MedicalRecordsState {
  medicalRecords: MedicalRecordResponse[] | null;
  currentAppointment: Appointment | null;
  doctors: Doctor[] | null;
  page: number;
}

const medicalRecordsInitialState: MedicalRecordsState = {
  medicalRecords: null,
  doctors: null,
  currentAppointment: null,
  page: 1,
};

export const medicalRecordsReducer = createReducer(
  medicalRecordsInitialState,
  on(
    MainActions.loadMedicalRecordsSuccessfull,
    (state, { medicalRecords }) => ({ ...state, medicalRecords })
  ),
  on(MainActions.loadDoctorsSuccess, (state, { doctors }) => ({
    ...state,
    doctors: doctors.users,
  })),
  on(MainActions.medicalAppointmentFound, (state, { payload }) => ({
    ...state,
    currentAppointment: payload,
  })),
  on(MainActions.medicalAppointmentSuccess, (state, { appointment }) => ({
    ...state,
    currentAppointment: appointment.appointment,
  }))
);
