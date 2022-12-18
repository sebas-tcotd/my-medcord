import { GenderEnum } from '../core/enums/gender.enum';
import { PermissionsEnum } from '../core/enums/permissions.enum';
import { RoleEnum } from '../core/enums/role.enum';
import { User } from '../core/models/user.model';

export const userMock: User = {
  dni: '72220000',
  email: 'mail@example.com',
  lastname: 'Vizcarra',
  name: 'Martín',
  permissions: PermissionsEnum.EDITOR,
  role: RoleEnum.MEDIC,
  telephone: '999999999',
  gender: GenderEnum.MALE,
  id: 9,
};

export const usersListMock: User[] = [
  {
    dni: '73856790',
    lastname: 'Herrera Loayza',
    name: 'Camilo José',
    telephone: '979 978 456',
    email: 'camilo.herrera@gmail.com',
    role: RoleEnum.NURSE,
    permissions: PermissionsEnum.READER,
  },
  {
    dni: '73856790',
    lastname: 'Herrera Loayza',
    name: 'Camilo José',
    telephone: '979 978 456',
    email: 'camilo.herrera@gmail.com',
    role: RoleEnum.NURSE,
    permissions: PermissionsEnum.READER,
  },
  {
    dni: '73856790',
    lastname: 'Herrera Loayza',
    name: 'Camilo José',
    telephone: '979 978 456',
    email: 'camilo.herrera@gmail.com',
    role: RoleEnum.NURSE,
    permissions: PermissionsEnum.READER,
  },
  {
    dni: '73856790',
    lastname: 'Herrera Loayza',
    name: 'Camilo José',
    telephone: '979 978 456',
    email: 'camilo.herrera@gmail.com',
    role: RoleEnum.NURSE,
    permissions: PermissionsEnum.READER,
  },
];
