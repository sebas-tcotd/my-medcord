import { createAction, props } from '@ngrx/store';
import { AppointmentResponse } from '../../../../core/interfaces/appointment.interface';
import { DoctorsResponse } from '../../../../core/interfaces/doctor.interface';
import { Appointment } from '../../../../core/models/appointment.model';
import { MedicalMetadata } from '../../../../core/models/medical-metadata.model';

export const medicalAppointmentCreation = createAction(
  '[Medical Appointment] MEDICAL_APPOINTMENT_CREATION',
  props<{ payload: Appointment }>()
);

export const medicalAppointmentUpdate = createAction(
  '[Medical Appointment] MEDICAL_APPOINTMENT_UPDATE',
  props<{ data: MedicalMetadata; medicalRecordId: number; doctorId: string }>()
);

export const medicalAppointmentLoad = createAction(
  '[Medical Appointment] MEDICAL_APPOINTMENT_LOAD',
  props<{ medicalRecordId: number; doctorId: string }>()
);

export const medicalAppointmentFound = createAction(
  '[Medical Appointment] MEDICAL_APPOINTMENT_FOUND',
  props<{ payload: Appointment }>()
);

export const medicalAppointmentSuccess = createAction(
  '[Medical Appointment] MEDICAL_APPOINTMENT_SUCCESS',
  props<{ appointment: AppointmentResponse }>()
);

export const medicalAppointmentFailed = createAction(
  '[Medical Appointment] MEDICAL_APPOINTMENT_ERROR',
  props<{ payload: any }>()
);

export const loadDoctors = createAction('[Medical Appointment] LOAD_DOCTORS');

export const loadDoctorsSuccess = createAction(
  '[Medical Appointment] LOAD_DOCTOR_SUCCESSFUL',
  props<{ doctors: DoctorsResponse }>()
);

export const loadDoctorsFail = createAction(
  '[Medical Appointment] LOAD_DOCTORS_FAILED',
  props<{ payload: any }>()
);
