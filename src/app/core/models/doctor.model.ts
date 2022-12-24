import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";

export interface Doctor {
  id: number;
  name: string;
  lastname: string;
  gender: GenderEnum;
  dni: string;
  email: string;
  password?: string;
  telephone: string;
  role: RoleEnum.MEDIC;
}
