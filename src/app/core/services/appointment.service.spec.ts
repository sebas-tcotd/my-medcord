import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AppointmentService } from './appointment.service';
import { UsersService } from './users.service';

describe('AppointmentService', () => {
  let service: AppointmentService;
  let usersService: UsersService;
  let controller: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(AppointmentService);
    usersService = TestBed.inject(UsersService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
