import { ActionsCellOptions } from '../shared/actions-cell/actions-cell.interface';

export const actionsCellMock: ActionsCellOptions[] = [
  {
    icon: 'stethoscope',
    redirect: '/editAppointment',
  },
  {
    icon: 'event',
    redirect: '/createAppointment',
  },
  { icon: 'visibility', redirect: '' },
  { icon: 'download', redirect: '' },
];
