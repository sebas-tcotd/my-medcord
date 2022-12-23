import { GenderEnum } from "../enums/gender.enum";

export interface MedicalRecord {
  firstName: string;
  lastName: string;
  dni: string;
  birthplace: string;
  birthdate: string;
  nationality: string;
  gender: GenderEnum;
  address: string;
  telephone: string;
}
