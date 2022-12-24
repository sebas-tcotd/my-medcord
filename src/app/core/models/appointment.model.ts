import { SpecialtyEnum } from '../enums/specialty.enum';
import { MedicalRecordResponse } from '../interfaces/medical-record.interface';
import { Doctor } from './doctor.model';
import { MedicalMetadata } from './medical-metadata.model';

export interface Appointment {
  specialty: SpecialtyEnum;
  doctorEmail?: string;
  medicalRecordId: string;
  date: Date;
  hour: Date;
  doctor?: Doctor;
  medicalRecord?: MedicalRecordResponse;
  analysis?: string;
  diagnostic?: string;
  medicines?: string;
}
