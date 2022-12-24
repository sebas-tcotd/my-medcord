import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { loginResponseMock } from '../../mocks/login.mock';
import { LoginResponse } from '../interfaces/login.interface';
import { User } from '../models/user.model';
import { GenderEnum } from '../enums/gender.enum';
import { RoleEnum } from '../enums/role.enum';

describe('UsersService', () => {
  let usersService: UsersService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    }); // Until spies are created
    usersService = TestBed.inject(UsersService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  it('performs login', () => {
    let actualLoginResponse: LoginResponse | undefined;

    usersService
      .login({
        email: 'mail@example.com',
        password: 'tunometecabrasarabambiche',
      })
      .subscribe((response) => (actualLoginResponse = response));

    const request = controller.expectOne(
      `https://sgdapidev.medcord.cf/users/login`
    );

    request.flush(loginResponseMock);
    controller.verify();

    expect(actualLoginResponse).toBe(loginResponseMock);
  });

  it('adds user to the registry list', () => {
    const user: User = {
      name: "Luisa",
      lastname: "Fernandez",
      gender: GenderEnum.FEMALE,
      dni: "7769208",
      email: "luisa.fernandez@gmail.com",
      telephone: "96435353",
      role: RoleEnum.NURSE,
      id: 10
    }

    usersService.addUserToRegistry(user)
  });

  it('updates logged user info', () => {
    const body = {
      email: "luisa.fernandez@gmail.com",
      password: "luisafernandez",
      telephone: "96435353"
    }

    usersService.updateLoggedUserInfo(body)
  });

  it('gets users', () => {
    usersService.getUsers()
  });

});
