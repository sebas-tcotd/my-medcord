import { GenderEnum } from "../enums/gender.enum";
import { NationalityEnum } from "../enums/nationality.enum";

export interface MedicalRecord {
  firstName: string;
  lastName: string;
  dni: string;
  birthplace: string;
  birthdate: string;
  nationality: NationalityEnum;
  gender: GenderEnum;
  address: string;
  telephone: string;
}
