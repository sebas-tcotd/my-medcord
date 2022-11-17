import { GenderEnum } from '../core/enums/gender.enum';
import { PermissionsEnum } from '../core/enums/permissions.enum';
import { RoleEnum } from '../core/enums/role.enum';
import { User } from '../core/models/user.model';

export const usersListMock: User[] = [
  {
    dni: '73856790',
    lastname: 'Herrera Loayza',
    name: 'Camilo José',
    telephone: '979 978 456',
    email: 'camilo.herrera@gmail.com',
    role: RoleEnum.NURSE,
    gender: GenderEnum.FEMALE,
    permissions: PermissionsEnum.READER,
    id: 0,
  },
  {
    dni: '73856790',
    lastname: 'Herrera Loayza',
    name: 'Camilo José',
    telephone: '979 978 456',
    email: 'camilo.herrera@gmail.com',
    role: RoleEnum.NURSE,
    gender: GenderEnum.FEMALE,
    permissions: PermissionsEnum.READER,
    id: 1,
  },
];
