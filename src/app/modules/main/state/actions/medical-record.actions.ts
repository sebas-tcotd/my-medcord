import { createAction, props } from '@ngrx/store';
import { MedicalRecordResponse } from '../../../../core/interfaces/medical-record.interface';
import { MedicalRecord } from '../../../../core/models/medical-record.model';

export const medicalRecordCreation = createAction(
  '[Medical Record] MEDICAL_RECORD_CREATION',
  props<{ payload: MedicalRecord }>()
);

export const medicalRecordSuccessfull = createAction(
  '[Medical Record] MEDICAL_RECORD_CREATED_SUCCESSFULLY'
);

export const medicalRecordError = createAction(
  '[Medical Record] MEDICAL_RECORD_ERROR',
  props<{ payload: any }>()
);

export const loadMedicalRecords = createAction(
  '[Medical Records] MEDICAL_RECORDS_LOAD'
);

export const loadMedicalRecordsSuccessfull = createAction(
  '[Medical Records] MEDICAL_RECORDS_LOAD_SUCCESSFULL',
  props<{ medicalRecords: MedicalRecordResponse[] }>()
);

export const loadMedicalRecordsFail = createAction(
  '[Medical Records] MEDICAL_RECORDS_LOAD_FAIL',
  props<{ payload: any }>()
);
