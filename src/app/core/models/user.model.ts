import { GenderEnum } from '../enums/gender.enum';
import { PermissionsEnum } from '../enums/permissions.enum';
import { RoleEnum } from '../enums/role.enum';

export interface User {
  name: string;
  lastname: string;
  gender?: GenderEnum;
  dni: string;
  email: string;
  telephone: string;
  role: RoleEnum;
  id?: string;
}
