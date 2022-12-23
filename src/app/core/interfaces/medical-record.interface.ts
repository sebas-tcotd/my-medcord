import { MedicalRecord } from '../models/medical-record.model';

export interface MedicalRecordResponse extends MedicalRecord {
  id: number;
}
