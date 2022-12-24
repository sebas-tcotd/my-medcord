import { LoginResponse } from '../core/interfaces/login.interface';
import { userMock } from './users-list.mock';

export const loginResponseMock: LoginResponse = {
  user: userMock,
  access_token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAbWFpbC5jb20iLCJpYXQiOjE2Njg5MTM5ODgsImV4cCI6MTY2ODkxNDA0OH0.RP7eyPiNRzjmfAjNVmHZ3cIt_j2cyospbaC6u2DUocs',
};
