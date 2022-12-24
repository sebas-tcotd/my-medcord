import { AppointmentEffects } from './appointment.effects';
import { DoctorsEffects } from './doctors.effects';
import { MedicalRecordsEffects } from './medical-record.effects';
import { UsersRegistryEffects } from './users-registry.effects';

export const MainEffectsArray: any[] = [
  UsersRegistryEffects,
  MedicalRecordsEffects,
  DoctorsEffects,
  AppointmentEffects
];
